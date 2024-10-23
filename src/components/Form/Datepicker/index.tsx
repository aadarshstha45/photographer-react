import {
  Icon,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  ResponsiveValue,
} from "@chakra-ui/react";
import { Calendar } from "@phosphor-icons/react";
import { FC, forwardRef } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Control, Controller } from "react-hook-form";
import "./style.css";
import { useInputProps } from "../config/inputProps";
import FormControl from "../config/FormControl";

interface DatePickerProps {
  name: string;
  control: Control<any>;
  label: string;
  isRequired?: boolean;
  isReadOnly?: boolean;
  backendError?: string[];
  showTimeSelect?: boolean;
  helperText?: string;
  width?: ResponsiveValue<string | number>;
  variant?: string;
  includeDates?: Date[];
}

const DatePicker: FC<DatePickerProps & InputProps> = ({
  name,
  control,
  label,
  isReadOnly,
  isRequired,
  width,
  backendError,
  helperText,
  includeDates,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        const inputElementProps = useInputProps();

        const CustomInput = forwardRef<any, any>((props, ref) => {
          return (
            <InputGroup>
              <Input {...inputElementProps} {...props} readOnly ref={ref} />
              <InputRightElement
                userSelect="none"
                pointerEvents="none"
                children={<Icon as={Calendar} boxSize={6} />}
                mt={1}
              />
            </InputGroup>
          );
        });

        return (
          <FormControl
            label={label}
            helperText={helperText}
            error={error}
            width={width}
            isRequired={!!isRequired}
            isReadOnly={!!isReadOnly}
            backendError={backendError}
            name={name}
            value={value}
          >
            <ReactDatePicker
              customInput={<CustomInput width={"100%"} />}
              selected={value ? new Date(value) : null}
              dateFormat={"yyyy-MM-dd"}
              value={value}
              onChange={(value) => {
                onChange(value);
                backendError = undefined;
              }}
              autoFocus={false}
              popperPlacement="bottom-end"
              includeDates={includeDates}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
            />
          </FormControl>
        );
      }}
    />
  );
};
export default DatePicker;
