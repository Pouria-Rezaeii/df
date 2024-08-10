import {InputLabel, TextField, TextFieldProps} from "@mui/material";
import {useFormContext, Controller} from "react-hook-form";
import {FieldCommonProps} from "./common-props.type";
import {persianNumbersToEnglish} from "@utils/persian-numbers-to-english";
import {MuiTextInputChangeEvent} from "@type/common-props.type";

type MuiTextFieldProps = Pick<
  TextFieldProps,
  | "multiline"
  | "rows"
  | "autoFocus"
  | "onKeyDownCapture"
  | "inputRef"
  | "InputProps"
  | "autoComplete"
>;
type CustomProps = {
  onChange?: (value: string | number) => void;
  type?: "number" | "text" | "tel";
  formatAsPrice?: boolean;
};

const validNumberInputs = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const validPhoneInputs = ["+", ...validNumberInputs];

export default function FormTextField<FormObject extends Record<string, any>>(
  props: FieldCommonProps<FormObject> & MuiTextFieldProps & CustomProps,
) {
  const {
    name,
    helperText,
    onChange: onChangeValue,
    label,
    placeholder,
    type = "text",
    formatAsPrice,
    ...rest
  } = props;
  const {control} = useFormContext();
  // const isMobile = /iPhone|Android|BlackBerry|Opera Mini|IEMobile/i.test(navigator.userAgent);

  const handleChange = (
    e: MuiTextInputChangeEvent,
    formOnChange: (value: string | number) => void,
  ) => {
    if (type === "text") {
      formOnChange(e.target.value);
      onChangeValue?.(e.target.value);
    } else {
      const stringValue = persianNumbersToEnglish(e.target.value)
        .split("")
        .filter((letter) =>
          (type === "tel" ? validPhoneInputs : validNumberInputs).includes(letter),
        )
        .join("");

      const newValue =
        type === "tel"
          ? stringValue //
          : stringValue // type === 'number'
            ? Number(stringValue)
            : ""; // this check will prevent converting "" to 0 if type==='number'

      formOnChange(newValue);
      onChangeValue?.(newValue);
    }
  };

  return (
    <Controller
      name={name as string}
      control={control}
      render={({field, fieldState: {error}}) => (
        <div className="w-full">
          <InputLabel error={!!error}>{label}</InputLabel>
          <TextField
            {...field}
            value={
              type === "number" && formatAsPrice && field.value
                ? Intl.NumberFormat("fa-IR").format(field.value)
                : field.value || ""
            }
            onChange={(e) => handleChange(e, field.onChange)}
            error={!!error}
            fullWidth
            placeholder={placeholder || `${label} را وارد کنید`}
            helperText={error ? error?.message : helperText}
            inputProps={{
              className: type === "number" || type === "tel" ? "dir-ltr text-right" : "dir-rtl",
            }}
            type={type === "number" || type === "tel" ? "tel" : "text"}
            {...rest}
          />
        </div>
      )}
    />
  );
}
