import {customValidations, messages} from "@constants/form-validations";
import {mobileNumberRegex} from "@constants/regex";
import {AuthForm} from "@type/temp.type";
import * as yup from "yup";

export const authFormSchema: yup.ObjectSchema<AuthForm> = yup.object({
  phone: customValidations.stringMatchesRegexRequired(mobileNumberRegex, messages.mobile),
});
