import * as yup from "yup";

export const messages = {
  required: "پر کردن این فیلد الزامی‌ است.",
  number: "لطفا یک عدد صحیح وارد کنید.",
  email: "لطفا یک ایمیل صحیح وارد کنید.",
  stringArray: "لطفا حداقل یک مورد وارد کنید.",
  mobile: "لطفا یک شماره همراه صحیح وارد کنید.",
  regex: "لطفا یک مقدار صحیح وارد کنید",
};

export const customValidations = {
  boolean: () => yup.boolean(),
  booleanRequired: () => yup.boolean().required(messages.required),

  string: () => yup.string().transform((_, value) => value.trim()),
  stringRequired: () =>
    yup
      .string()
      .transform((_, value) => value.trim())
      .required(messages.required),

  stringMatchesRegexRequired: (regex: RegExp, customMessage?: string) =>
    yup
      .string()
      .required(messages.required)
      .matches(regex, customMessage || messages.regex),

  stringArrayMatchesRegexRequired: (regex: RegExp, customMessage?: string) =>
    yup
      .array()
      .of(
        yup
          .string()
          .required(messages.required)
          .matches(regex, customMessage || messages.regex),
      )
      .required(messages.required)
      .min(1, messages.stringArray),

  stringArray: () => yup.array().of(yup.string()),
  stringArrayRequired: () =>
    yup
      .array()
      .of(yup.string().required())
      .min(1, messages.stringArray)
      .required(messages.stringArray),

  number: () =>
    yup
      .number()
      .typeError(messages.number)
      .positive(messages.number)
      .transform((_, value) => Number(value)),

  numberRequired: () =>
    yup
      .number()
      .typeError(messages.number)
      .positive(messages.number)
      .required(messages.required)
      .transform((_, value) => Number(value)),

  numberIncludeZero: () =>
    yup
      .number()
      .typeError(messages.number)
      .moreThan(-1, messages.number)
      .transform((_, value) => Number(value)),

  numberIncludeZeroRequired: () =>
    yup
      .number()
      .typeError(messages.number)
      .moreThan(-1, messages.number)
      .required(messages.required)
      .transform((_, value) => Number(value)),

  numberArray: () => yup.array().of(yup.number()),
  numberArrayRequired: (minItemCount: number = 1) =>
    yup
      .array()
      .of(yup.number().required(messages.required))
      .min(minItemCount, messages.stringArray)
      .required(messages.stringArray),

  email: () => yup.string().email(messages.email),
  emailRequired: () => yup.string().email(messages.email).required(messages.required),
};
