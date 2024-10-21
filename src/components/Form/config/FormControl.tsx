import {
  FormControl as CFormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  ResponsiveValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FieldError } from "react-hook-form";

interface IFormControl {
  label?: string;
  isRequired?: boolean;
  isReadOnly?: boolean;
  isDisabled?: boolean;
  helperText?: string;
  width?: ResponsiveValue<number | string>;
  children: ReactNode;
  name?: string;
  error?: FieldError;
  backendError?: string[];
  leftIcon?: ReactNode;
  value?: any;
}

const FormControl: React.FC<IFormControl> = ({
  children,
  label,
  isRequired,
  isReadOnly,
  isDisabled,
  helperText,
  width,
  name,
  error,
  backendError,
}) => {
  return (
    <CFormControl
      isRequired={!!isRequired}
      isReadOnly={!!isReadOnly}
      isDisabled={!!isDisabled}
      isInvalid={!!error || !!backendError}
      w={width ?? "100%"}
      my={2}
    >
      {label && (
        <FormLabel mb={2} htmlFor={name} fontWeight={500}>
          {label}
        </FormLabel>
      )}
      {children}

      {helperText && <FormHelperText mt={2}>{helperText}</FormHelperText>}
      <FormErrorMessage>{error?.message || backendError?.[0]}</FormErrorMessage>
    </CFormControl>
  );
};

export default FormControl;
