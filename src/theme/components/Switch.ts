import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const white = defineStyle({
  thumb: {
    bg: "gray.100",
    _checked: {
      bg: "#000", // Black thumb when the switch is checked
    },
  },
  track: {
    bg: "gray.200",
    _checked: {
      bg: "gray.400", // Gray track when the switch is checked
    },
  },
});

const black = defineStyle({
  thumb: {
    bg: "gray.800",
    _checked: {
      bg: "#FFF", // White thumb when the switch is checked
    },
  },
  track: {
    bg: "gray.600",
    _checked: {
      bg: "gray.700", // Darker gray track when the switch is checked
    },
  },
});

const Switch = defineStyleConfig({
  variants: {
    white,
    black,
  },
  defaultProps: {
    colorScheme: "black", // Default color scheme for the Switch component
  },
});

export default Switch;
