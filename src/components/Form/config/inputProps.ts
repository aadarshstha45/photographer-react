import { useColorMode } from "@chakra-ui/react";

export const useInputProps = () => {
  const { colorMode } = useColorMode();

  return {
    borderRadius: 5,
    borderColor: colorMode === "dark" ? "gray.600" : "gray.300",
    size: "lg",
    _hover: {
      borderColor: colorMode === "dark" ? "gray.500" : "gray.400",
    },
    focusBorderColor: colorMode === "dark" ? "gray.400" : "gray.400",
    errorBorderColor: "red.500",
    boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
  };
};
