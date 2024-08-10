import MaxWidthContainer from "@components/max-width-container";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import PhoneNumberForm from "./phone-number-form";
import OtpForm from "./otp-form";
import {useNavigate} from "react-router-dom";
import {routes} from "@constants/routes";
import Footer from "../../core/components/footer";
import {LoginOtp, LoginVerify} from "@open-api";
import {ACCESS_KEY} from "@constants/local-storage-keys";
import PageWrapper from "@components/page-wrapper";

export default function Auth() {
  const [step, setStep] = useState<1 | 2>(1);
  const [requestOtpResponse, setRequestOtpResponse] = useState<LoginOtp>();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem(ACCESS_KEY);
  }, []);

  const handleOtpSent = (requestOtpResponse: LoginOtp) => {
    setRequestOtpResponse(requestOtpResponse);
    setStep(2);
  };

  const handleApproveOtp = (verifyOtpResponse: LoginVerify) => {
    localStorage.setItem(ACCESS_KEY, verifyOtpResponse.access);
    navigate(routes.dashboard, {replace: true});
    toast.success("به پنل کاربری دفترفایل خوش آمدید.");
  };

  return (
    <PageWrapper>
      <div className="h-full flex flex-col">
        <MaxWidthContainer className="w-full pb-10 bg-white relative z-10">
          <div className="flex flex-col items-center pt-[9vh] max-w-sm m-auto">
            {/* HINT image container height should be as same as image height */}
            <div className="h-[112px] flex justify-center">
              <img src="/images/logo-mobile-5.png" alt="dafter-file" />
            </div>
            <div className="w-full mt-[10vh]">
              {step === 1 ? (
                <PhoneNumberForm
                  phone={requestOtpResponse?.mobile_number}
                  onOtpSent={handleOtpSent}
                />
              ) : (
                <OtpForm
                  requestOtpResponse={requestOtpResponse!}
                  onRefreshOtp={handleOtpSent}
                  onApproveOtp={handleApproveOtp}
                  onClickEdit={() => setStep(1)}
                />
              )}
            </div>
          </div>
        </MaxWidthContainer>

        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </PageWrapper>
  );
}
