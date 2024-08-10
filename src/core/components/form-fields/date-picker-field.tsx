import moment from "moment-jalaali";
import {InputLabel} from "@mui/material";
import {useFormContext, Controller} from "react-hook-form";
import {FieldCommonProps} from "./common-props.type";
import {AdapterMomentJalaali} from "@mui/x-date-pickers/AdapterMomentJalaali";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {MobileDatePicker as MuiDatePicker} from "@mui/x-date-pickers";

type CustomProps = {
  onChange?: (value: string | undefined) => void;
};

const MIN_DATE = import.meta.env.VITE_DATE_PICKER_MIN_DATE || "2024-01-01";
export default function FormDatePickerField<FormObject extends Record<string, any>>(
  props: FieldCommonProps<FormObject> & CustomProps,
) {
  const {name, helperText, onChange: onChangeValue, label, disabled} = props;
  const {control} = useFormContext();
  moment.loadPersian({dialect: "persian-modern"});

  const customLocaleText = {
    okButtonLabel: "ثبت",
    cancelButtonLabel: "انصراف",
    clearButtonLabel: "پاک کردن",
    // todayButtonLabel: "انتخاب امروز",
  };

  return (
    <Controller
      name={name as string}
      control={control}
      render={({field, fieldState: {error}}) => (
        <div className="w-full">
          <InputLabel error={!!error}>{label}</InputLabel>
          <LocalizationProvider localeText={customLocaleText} dateAdapter={AdapterMomentJalaali}>
            <MuiDatePicker
              disableFuture
              minDate={moment(MIN_DATE)}
              value={field.value ? moment(new Date(field.value)) : null}
              onChange={(v) => {
                const value = v
                  ? new Date((v as any)._d).toLocaleDateString().split("T")[0]
                  : undefined;
                field.onChange(value);
                onChangeValue?.(value);
              }}
              slots={{toolbar: () => <div></div>}}
              slotProps={{
                actionBar: {actions: ["accept", "clear", "cancel"]},
                textField: {
                  placeholder: "روز / ماه / سال",
                  fullWidth: true,
                  helperText: error ? error?.message : helperText,
                  error: !!error,
                  disabled: disabled,
                },
              }}
            />
          </LocalizationProvider>
        </div>
      )}
    />
  );
}
