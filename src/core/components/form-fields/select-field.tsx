import {InputLabel, MenuItem, SelectProps, TextField} from "@mui/material";
import {useFormContext, Controller} from "react-hook-form";
import {FieldCommonProps} from "./common-props.type";
import isPlainObject from "@utils/is-plain-object";

type OptionValue = string | number | boolean;
type MuiSelectProps = Pick<SelectProps, "multiple">;
type CustomProps = {
  options: {label: string; value: OptionValue}[] | OptionValue[];
  onChange?: (value: OptionValue | OptionValue[]) => void;
  loading?: boolean;
  renderSelectAllItems?: boolean;
};

export default function FormSelectField<FormObject extends Record<string, any>>(
  props: FieldCommonProps<FormObject> & MuiSelectProps & CustomProps,
) {
  const {
    name,
    helperText,
    options,
    multiple,
    onChange: onChangeValue,
    label,
    loading,
    renderSelectAllItems,
    ...rest
  } = props;
  const {control} = useFormContext();

  const geSelectOptions = () => {
    if (loading)
      return (
        <MenuItem value={null as any} disabled>
          در حال بارگذاری...
        </MenuItem>
      );

    return options.map((opt: any, index) => (
      // value supports boolean types but is not included in the MenuItem value types
      <MenuItem key={index} value={isPlainObject(opt) ? (opt.value as string) : (opt as string)}>
        {isPlainObject(opt) ? opt.label : String(opt)}
      </MenuItem>
    ));
  };

  // SelectField & CheckBoxField have the same style and similar functionality
  return (
    <Controller
      name={name as string}
      control={control}
      render={({field: {value, ...field}, fieldState: {error}}) => (
        <div className="w-full !relative">
          <InputLabel error={!!error}>{label}</InputLabel>
          {/* 0 is accepted */}
          {(value === null || value === undefined) && (
            <div className="absolute right-4 left-11 mt-2.5 text-[15px] text-[#a2a2a2] whitespace-nowrap overflow-clip">
              {rest.placeholder || `${label} را انتخاب کنید`}
            </div>
          )}
          <TextField
            {...field}
            // 0 is accepted
            value={value !== null && value !== undefined ? value : multiple ? [] : ""}
            onChange={(e) => {
              field.onChange(e.target.value);
              onChangeValue?.(e.target.value);
            }}
            helperText={error ? error?.message : helperText}
            error={!!error}
            fullWidth
            select
            SelectProps={{
              IconComponent: () => <img src="/icons/arrow-down.svg" className="ml-3" />,
              multiple,
            }}
            {...rest}
          >
            {renderSelectAllItems && <MenuItem value={undefined as any}>همه موارد</MenuItem>}
            {geSelectOptions()}
          </TextField>
        </div>
      )}
    />
  );
}
