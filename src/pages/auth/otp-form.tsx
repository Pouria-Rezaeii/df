import {usersApi} from "@api/users";
import {LoadingButton} from "@mui/lab";
import {useMutation} from "@tanstack/react-query";
import {useEffect, useRef, useState} from "react";
import {toast} from "react-toastify";
import Countdown from "react-countdown";
import {Button, Typography} from "@mui/material";
import {palette} from "@configs/theme";
import {LoginOtp, LoginVerify} from "@open-api";
import {persianNumbersToEnglish} from "@utils/persian-numbers-to-english";
import OtpInput from "@components/otp-input";

interface Props {
  requestOtpResponse: LoginOtp;
  onRefreshOtp: (requestOptResponse: LoginOtp) => void;
  onApproveOtp?: (verifyOtpResponse: LoginVerify) => void;
  onClickEdit?: () => void;
}

const OTP_EXPIRATION_TIME = Number(import.meta.env["VITE_OTP_EXPIRATION_TIME_IN_SECONDS"] || 120);

export default function OtpForm(props: Props) {
  const [otp, setOtp] = useState("");
  const [expireTime, setExpireTime] = useState(Date.now() + +OTP_EXPIRATION_TIME * 1000);
  const countdownRef = useRef<Countdown>(null);
  const {
    requestOtpResponse: {mobile_number, temp_code},
    onRefreshOtp,
    onApproveOtp,
    onClickEdit,
  } = props;

  useEffect(() => {
    const interval = setInterval(() => {
      setExpireTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const {
    mutate: confirmOtp,
    error,
    isPending: isPendingConfirm,
  } = useMutation({
    mutationFn: usersApi.mutations.confirmOtp,
  });

  const {mutate: getNewOtp, isPending: isPendingRefresh} = useMutation({
    mutationFn: usersApi.mutations.getOtp,
  });

  const handleChangeOtp = (_otp: string) => {
    const otp = persianNumbersToEnglish(_otp)
      .split("")
      .filter((letter) => ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(letter))
      .join("");

    setOtp(otp);
    if (otp.length === 5 && !countdownRef.current!.isCompleted()) {
      handleConfirmOtp(otp);
    }
  };

  const handleConfirmOtp = (otp: string) => {
    confirmOtp(
      {
        mobile_number: mobile_number,
        otp_code: +otp,
        temp_code: temp_code,
      },
      {onSuccess: (res) => onApproveOtp?.(res)},
    );
  };

  const refreshOtp = () => {
    getNewOtp(
      {mobile_number: mobile_number},
      {
        onSuccess: (res) => {
          onRefreshOtp?.(res);
          setExpireTime(Date.now() + OTP_EXPIRATION_TIME * 1000);
          countdownRef.current?.start();
          toast.success("کد یک بار مصرف جدید با موفقیت ارسال شد.");
        },
      },
    );
  };

  return (
    <div>
      <Typography variant="h2" className="mb-1">
        کد تایید را وارد کنید
      </Typography>
      <Typography variant="hint1">کد به شماره موبایل {mobile_number} ارسال شد.</Typography>

      <div className="otp-input-container">
        <OtpInput
          value={otp}
          onChange={handleChangeOtp}
          numInputs={5}
          inputType="tel"
          shouldAutoFocus
          inputStyle={{
            height: 48,
            width: 48,
            borderRadius: 4,
            border: `solid 1px ${error ? palette.error : palette.gray[700]}`,
            boxShadow: `0 0 2px 0 inset ${error ? palette.error : "#00000044"}, 0 0 4px 0 ${error ? palette.error : "#00000044"}`,
          }}
          containerStyle={{direction: "ltr", gap: 12, justifyContent: "center", marginTop: "1rem"}}
          renderInput={(props) => <input {...props} type="tel" />}
        />
      </div>
      {/* container width should be the same as overall width occupied by opt inputs */}
      <div className="w-[290px] m-auto mt-2">
        <Countdown
          ref={countdownRef}
          date={expireTime}
          renderer={({minutes, seconds, completed}) => {
            return (
              <div className="w-full flex justify-between items-center">
                <div className="h-8 flex items-center">
                  {error && (
                    <Typography variant="hint1" className="!text-error">
                      کد وارد شده نامعتبر می‌باشد
                    </Typography>
                  )}
                </div>
                <div className="text-end">
                  {completed || isPendingRefresh ? (
                    <Button
                      size="small"
                      color="secondary"
                      onClick={refreshOtp}
                      disabled={isPendingRefresh}
                      style={{height: 32, marginLeft: -5}}
                    >
                      ارسال مجدد کد
                    </Button>
                  ) : (
                    <Typography variant="hint1">
                      {"0" + minutes}:{seconds} تا ارسال مجدد کد
                    </Typography>
                  )}
                </div>
              </div>
            );
          }}
        />
      </div>

      <div className="w-full grid grid-cols-2 gap-4 mt-5">
        <LoadingButton variant="contained" loading={isPendingConfirm}>
          ورود
        </LoadingButton>
        <Button variant="outlined" onClick={onClickEdit}>
          ویرایش شماره موبایل
        </Button>
      </div>
    </div>
  );
}
