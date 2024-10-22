import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
  ResponsiveValue,
  Textarea,
  TextareaProps,
} from "@chakra-ui/react";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import React, { ReactNode, useState } from "react";
import { Control, Controller } from "react-hook-form";
import reactTextareaAutosize from "react-textarea-autosize";
import FormControl from "../config/FormControl";
import { useInputProps } from "../config/inputProps";

interface ITextInputProps {
  isControlled?: boolean;
  value?: string;
  name: string;
  label?: string;
  control?: Control<any>;
  setValue?: (value: string) => void;
  placeholder?: string;
  backendError?: string[];
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  width?: ResponsiveValue<number | string>;
  type?: string;
  helperText?: string;
  variant?: string;
}

const TextInput: React.FC<ITextInputProps & InputProps & TextareaProps> = ({
  isControlled = true,
  value,
  setValue,
  placeholder,
  isDisabled,
  isReadOnly,
  isRequired,
  name,
  label,
  control,
  leftIcon,
  rightIcon,
  width,
  type,
  backendError,
  helperText,
  variant,
  ...restProps
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputProps = useInputProps();
  return isControlled ? (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <FormControl
          error={error}
          backendError={backendError}
          label={label}
          isRequired={isRequired}
          isDisabled={isDisabled}
          isReadOnly={isReadOnly}
          width={width}
          name={name}
          helperText={helperText}
        >
          {type === "textarea" ? (
            <Textarea
              {...inputProps}
              as={reactTextareaAutosize}
              minH={0}
              minRows={5}
              maxRows={10}
              placeholder={placeholder ?? ""}
              value={value}
              variant={isReadOnly ? "filled" : variant ?? "outline"}
              onChange={onChange}
              {...restProps}
            />
          ) : (
            <InputGroup>
              {!!leftIcon && <InputLeftElement>{leftIcon}</InputLeftElement>}
              <Input
                {...inputProps}
                type={
                  type === "password"
                    ? showPassword
                      ? "text"
                      : "password"
                    : type
                }
                variant={isReadOnly ? "filled" : variant ?? "outline"}
                autoComplete={type === "password" ? "new-password" : "off"}
                value={value}
                placeholder={placeholder ?? ""}
                onChange={(value) => {
                  onChange(value);
                  backendError = undefined;
                }}
                {...restProps}
              />
              {type === "password" && !rightIcon && (
                <InputRightElement mt={1}>
                  <Icon
                    as={showPassword ? EyeSlash : Eye}
                    boxSize={6}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </InputRightElement>
              )}
              {!!rightIcon && type !== "password" && (
                <InputLeftElement>{rightIcon}</InputLeftElement>
              )}
            </InputGroup>
          )}
        </FormControl>
      )}
    />
  ) : (
    <InputGroup>
      {!!leftIcon && <InputLeftElement>{leftIcon}</InputLeftElement>}
      <Input
        {...inputProps}
        placeholder={placeholder ?? ""}
        value={value}
        onChange={(e) => setValue && setValue(e.target.value)}
      />
      {!!rightIcon && <InputRightElement mt={1}>{rightIcon}</InputRightElement>}
    </InputGroup>
  );
};

export default TextInput;
