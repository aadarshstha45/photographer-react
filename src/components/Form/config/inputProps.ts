import { useColorModeValue } from "@chakra-ui/react";

export const useInputProps = () => {
  const borderColor = useColorModeValue("gray.600", "gray.300");
  const hoveredBorder = useColorModeValue("gray.500", "gray.400");
  const focusBorderColor = useColorModeValue("gray.400", "white");
  return {
    borderRadius: 5,
    borderColor,
    size: "lg",
    _hover: {
      borderColor: hoveredBorder,
    },
    focusBorderColor,
    errorBorderColor: "red.500",
    boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
  };
};
