import {InputLabel, InputBaseProps, TextField, IconButton, Button, Typography} from "@mui/material";
import {useFormContext, Controller} from "react-hook-form";
import {FieldCommonProps} from "./common-props.type";
import {useState} from "react";
import {toast} from "react-toastify";
import {persianNumbersToEnglish} from "@utils/persian-numbers-to-english";
import {MuiTextInputChangeEvent} from "@type/common-props.type";

type MuiInputBaseProps = Pick<InputBaseProps, "autoFocus">;
type CustomProps = {
  maxItemsCount?: number;
  regex?: RegExp;
  onChange?: (value: (string | number)[]) => void;
  validationFailedMessage?: string;
  type?: "number" | "text" | "tel";
};

const validNumberInputs = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const validPhoneInputs = ["+", ...validNumberInputs];

export default function FormTextFieldMultiple<FormObject extends Record<string, any>>(
  props: FieldCommonProps<FormObject> & MuiInputBaseProps & CustomProps,
) {
  const {
    name,
    helperText,
    onChange: onChangeValue,
    label,
    placeholder,
    maxItemsCount = 10,
    regex = /[\s\S]+/,
    validationFailedMessage,
    type,
    ...rest
  } = props;
  const {control} = useFormContext();
  const [innerValue, setInnerValue] = useState("");

  const handleChange = (e: MuiTextInputChangeEvent) => {
    if (type === "text") {
      setInnerValue(e.target.value);
    } else {
      const transformedValue = persianNumbersToEnglish(e.target.value)
        .split("")
        .filter((letter) =>
          (type === "tel" ? validPhoneInputs : validNumberInputs).includes(letter),
        )
        .join("");
      setInnerValue(transformedValue);
    }
  };

  const handleAdd = (formValue: string[], onChange: (value: (string | number)[]) => void) => {
    const currentValue = innerValue.trim();
    if (!currentValue) {
      return;
    }
    if (!regex.test(currentValue)) {
      toast.error(validationFailedMessage || "لطفا یک مقدار صحیح وارد کنید.");
      return;
    }
    if (formValue.includes(currentValue)) {
      toast.error("این مقدار قبلا وارد شده است.");
      return;
    }
    const newValue = type === "tel" ? currentValue : Number(currentValue);

    const newFormValue = [...formValue, newValue];
    onChange(newFormValue);
    onChangeValue?.(newFormValue);
    setInnerValue("");
  };

  return (
    <Controller
      name={name as string}
      control={control}
      render={({field: {value: formValue, onChange, ...field}, fieldState: {error}}) => {
        if (!Array.isArray(formValue)) {
          throw new Error(`${String(name)}: Value type should be an instance of Array constructor`);
        }

        return (
          <>
            <div className="w-full">
              <InputLabel error={!!error}>{label}</InputLabel>
              <TextField
                {...field}
                value={innerValue}
                onChange={handleChange}
                onKeyDownCapture={(e) => e.key === "Enter" && handleAdd(formValue, onChange)}
                error={!!error}
                disabled={formValue.length === maxItemsCount}
                fullWidth
                placeholder={placeholder || `${label} را وارد کنید`}
                helperText={error ? error?.message : helperText}
                inputProps={{
                  className: type === "number" || type === "tel" ? "dir-ltr text-right" : "dir-rtl",
                }}
                type={type === "number" || type === "tel" ? "tel" : "text"}
                autoComplete="off"
                InputProps={{
                  endAdornment: (
                    <Button onClick={() => handleAdd(formValue, onChange)}>
                      <Typography
                        variant="body3"
                        className="text-primary-main whitespace-nowrap pl-2.5"
                      >
                        افزودن <span className="font-bold">+</span>
                      </Typography>
                    </Button>
                  ),
                }}
                {...rest}
              />
            </div>

            {/* submitted items */}
            <div className="inline-flex flex-col gap-1 w-[130px]">
              {(formValue as string[]).map((value) => (
                <Button
                  key={value}
                  component="div"
                  size="small"
                  variant="outlined"
                  disableRipple
                  className="!cursor-text"
                  endIcon={
                    <IconButton
                      onClick={() => {
                        const newFormValue = formValue.filter((v) => v !== value);
                        onChange(newFormValue);
                        onChangeValue?.(newFormValue);
                      }}
                    >
                      <img src="/icons/trash-red.svg" />
                    </IconButton>
                  }
                >
                  <span className="dir-ltr -ml-1.5 w-[80%]">{value}</span>
                </Button>
              ))}
            </div>
          </>
        );
      }}
    />
  );
}
