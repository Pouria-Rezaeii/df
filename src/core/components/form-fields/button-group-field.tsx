import {Button, InputLabel} from "@mui/material";
import {useFormContext, Controller} from "react-hook-form";

interface Props<FormObject extends Record<string, any>> {
  name: keyof FormObject;
  label: string;
  items: {label: string; value: string | number | boolean}[];
  onChange?: (value: string | number | boolean) => void;
  disabled?: boolean;
}

export default function FormButtonGroupField<FormObject extends Record<string, any>>(
  props: Props<FormObject>,
) {
  const {name, label, items, onChange: onChangeValue, disabled} = props;
  const {control} = useFormContext();

  return (
    <Controller
      name={name as string}
      control={control}
      render={({field, fieldState: {error}}) => (
        <div className="w-full">
          <InputLabel error={!!error}>{label}</InputLabel>
          <div className="grid grid-cols-2 gap-2">
            {items.map((item) => (
              <Button
                key={item.label}
                disabled={disabled}
                color="secondary"
                variant={field.value === item.value ? "contained" : "outlined"}
                onClick={() => {
                  field.onChange(item.value);
                  onChangeValue?.(item.value);
                }}
              >
                {item.label}
              </Button>
            ))}
          </div>
          {error && <p className="text-error text-sm mt-2">{error.message}</p>}
        </div>
      )}
    />
  );
}
