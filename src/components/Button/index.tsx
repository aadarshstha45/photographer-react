import {
  ButtonProps,
  Button as CButton,
  IconButton as CIconButton,
  IconButtonProps,
  useColorMode,
} from "@chakra-ui/react";

interface CustomButtonProps {
  colorScheme?: string;
}

const Button: React.FC<CustomButtonProps & ButtonProps> = ({
  colorScheme,
  ...props
}) => {
  const { colorMode } = useColorMode();
  return (
    <CButton
      {...props}
      colorScheme={colorScheme ?? (colorMode === "dark" ? "white" : "black")}
    />
  );
};

const IconButton: React.FC<CustomButtonProps & IconButtonProps> = ({
  colorScheme,
  ...props
}) => {
  const { colorMode } = useColorMode();
  return (
    <CIconButton
      {...props}
      colorScheme={colorScheme ?? (colorMode === "dark" ? "white" : "black")}
    />
  );
};

export { Button, IconButton };
