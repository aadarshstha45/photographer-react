import { useColorModeValue } from "@chakra-ui/react";
import { ChakraStylesConfig } from "chakra-react-select";

export const useChakraSelectStyles = () => {
  const borderColor = useColorModeValue("gray.600", "gray.300");
  const hoveredBorder = useColorModeValue("gray.500", "gray.400");
  const focusBorderColor = useColorModeValue("#000", "#FFF");
  const chakraStyles: ChakraStylesConfig = {
    dropdownIndicator: (prev, { selectProps }) => ({
      ...prev,
      "> svg": {
        transition: "transform 0.3s",
        transform: `rotate(${selectProps.menuIsOpen ? -180 : 0}deg)`,
      },
      color: "gray.500",
    }),
    menuList: (prev) => ({
      ...prev,
      zIndex: 99,
      py: 0,
      scrollbarWidth: "thin",
      scrollBehavior: "smooth",
    }),
    menu: (prev) => ({
      ...prev,
      zIndex: 99,
    }),

    option: (prev) => ({
      ...prev,
      zIndex: 99,
      h: 10,
      fontSize: { base: "14px", md: "16px" },
    }),
    control: (prev) => ({
      ...prev,
      borderColor: borderColor,
      fontSize: { base: "14px", md: "16px" },
      borderRadius: 5,
      shadow: "sm",
      boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      _hover: {
        borderColor: hoveredBorder,
      },
      cursor: "pointer",
      focusBorderColor: focusBorderColor,
    }),

    indicatorsContainer: (provided) => ({
      ...provided,
      color: "gray.200",
      "&:hover": {
        color: "gray.200",
      },
    }),
    clearIndicator: (provided) => ({
      ...provided,
      color: "gray.200",
      "&:hover": {
        color: "gray.200",
      },
    }),
  };

  return chakraStyles;
};
