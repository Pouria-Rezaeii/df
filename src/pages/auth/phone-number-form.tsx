import {usersApi} from "@api/users";
import FormTextField from "@components/form-fields/text-field";
import {yupResolver} from "@hookform/resolvers/yup";
import {LoadingButton} from "@mui/lab";
import {useMutation} from "@tanstack/react-query";
import {useForm, FormProvider} from "react-hook-form";
import {authFormSchema} from "./form-deps";
import {AuthForm} from "@type/temp.type";
import {LoginOtp} from "@open-api";

interface Props {
  phone?: string;
  onOtpSent?: (requestOptResponse: LoginOtp) => void;
}

export default function PhoneNumberForm(props: Props) {
  const {phone, onOtpSent} = props;
  const formMethods = useForm<AuthForm>({
    resolver: yupResolver(authFormSchema),
    defaultValues: {phone: phone || ""},
  });

  const {mutate: getOtp, isPending} = useMutation({
    mutationFn: usersApi.mutations.getOtp,
  });

  const onSubmit = ({phone}: AuthForm) => {
    phone = "0" + phone.slice(-10); // change possible +98 to 0
    getOtp({mobile_number: phone}, {onSuccess: (res) => onOtpSent?.(res)});
  };

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <div className="w-full flex flex-col gap-6">
          <FormTextField<AuthForm>
            autoFocus
            name="phone"
            type="tel"
            label="موبایل"
            placeholder="جهت ورود شماره موبایل خود را وارد کنید"
          />
          <LoadingButton type="submit" variant="contained" fullWidth loading={isPending}>
            ادامه
          </LoadingButton>
        </div>
      </form>
    </FormProvider>
  );
}
