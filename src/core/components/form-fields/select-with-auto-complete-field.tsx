import {Autocomplete, Chip, InputLabel, TextField} from "@mui/material";
import {useFormContext, Controller} from "react-hook-form";
import {FieldCommonProps} from "./common-props.type";

// type MuiSelectProps = Pick<SelectProps,'multiple'>;
type CustomProps = {
  options: {label: string; value: string | number}[];
  onChange?: (value: (string | number)[]) => void;
  loading?: boolean;
};

/** For now only supports multiple */
export default function FormSelectWithAutocompleteField<FormObject extends Record<string, any>>(
  props: FieldCommonProps<FormObject> & CustomProps,
) {
  const {label, placeholder, name, helperText, options, onChange: onChangeValue, ...rest} = props;
  const {control} = useFormContext();

  return (
    <Controller
      name={name as string}
      control={control}
      render={({field, fieldState: {error}}) => (
        <div className="w-full">
          <InputLabel error={!!error}>{label}</InputLabel>
          <Autocomplete
            multiple
            autoHighlight
            fullWidth
            disableCloseOnSelect
            {...field}
            // value coming from outside is only containing the ids but the Autocomplete needs
            // the exact form provided in the options property
            value={options.filter((opt) => (field.value || []).includes(opt.value))}
            onChange={(_, newValue: any) => {
              // extracting only the values
              const valuesArray = (newValue as typeof options).map((i) => i.value);
              field.onChange(valuesArray);
              onChangeValue?.(valuesArray);
            }}
            options={options}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField
                {...params}
                helperText={error ? error?.message : helperText}
                error={!!error}
                placeholder={
                  !field.value || !field.value.length
                    ? placeholder || `${label} را انتخاب کنید`
                    : ""
                }
              />
            )}
            // this is only a hack to remove the console warning (https://github.com/mui/material-ui/issues/39833)
            renderTags={(value, getTagProps) =>
              value.map((option, index) => {
                const {key, ...tagProps} = getTagProps({index});
                return <Chip key={key} label={option.label} {...tagProps} />;
              })
            }
            noOptionsText="موردی یافت نشد"
            loadingText="در حال بارگذاری..."
            {...rest}
          />
        </div>
      )}
    />
  );
}
