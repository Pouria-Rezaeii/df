import {TextFieldProps} from "@mui/material";

export type FieldCommonProps<FormObject extends Record<string, any>> = Pick<
  TextFieldProps,
  "helperText" | "label" | "placeholder" | "disabled"
> & {
  name: keyof FormObject;
};
