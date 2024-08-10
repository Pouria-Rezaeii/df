import {InputLabel, TextField, MenuItem} from "@mui/material";
import {useFormContext, Controller} from "react-hook-form";

interface Props<FormObject extends Record<string, any>> {
  name: keyof FormObject;
  label: string;
  onChange?: (value: boolean) => void;
  renderSelectAllItems?: boolean;
  placeholder?: string;
}

export default function FormCheckboxField<FormObject extends Record<string, any>>(
  props: Props<FormObject>,
) {
  const {name, label, onChange: onChangeValue, renderSelectAllItems, ...rest} = props;
  const {control} = useFormContext();

  // SelectField & CheckBoxField have the same style and similar functionality
  return (
    <Controller
      name={name as string}
      control={control}
      render={({field: {value, ...field}, fieldState: {error}}) => (
        <div className="w-full !relative">
          <InputLabel error={!!error}>{label}</InputLabel>
          {(value === null || value === undefined) && (
            <div className="absolute right-4 left-11 mt-2.5 text-sm text-[#a2a2a2] whitespace-nowrap overflow-clip">
              {rest.placeholder || `${label} را انتخاب کنید`}
            </div>
          )}
          <TextField
            {...field}
            value={
              value === true || value === "true"
                ? true
                : value === false || value === "false"
                  ? false
                  : ""
            }
            onChange={(e) => {
              field.onChange(e.target.value);
              onChangeValue?.(e.target.value as any);
            }}
            helperText={error?.message}
            error={!!error}
            fullWidth
            select
            SelectProps={{
              IconComponent: () => <img src="/icons/arrow-down.svg" className="ml-3" />,
            }}
            {...rest}
          >
            {renderSelectAllItems && <MenuItem value={undefined as any}>همه موارد</MenuItem>}
            <MenuItem value={true as any}>دارد</MenuItem>
            <MenuItem value={false as any}>ندارد</MenuItem>
          </TextField>
        </div>
      )}
    />
  );
}
