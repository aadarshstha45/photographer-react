import { useColorModeValue } from "@chakra-ui/react";

export const useBoxProps = () => {
  const bg = useColorModeValue("gray.50", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  return {
    w: "full",
    gap: 4,
    maxW: { sm: "500px" },
    bg,

    border: "1px solid",
    borderColor,
    p: { base: 4, sm: 8 },
    boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
    borderRadius: 5,
  };
};
