import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

// Solid variant for white and black color schemes

const primary = defineStyle({
  bg: "primary", // Use the primary color as the background
  color: "white", // Text color
  _hover: {
    bg: "#b28b51", // Slightly darker shade on hover
  },
  fontFamily: "Bebas Neue",
  fontSize: "22px",
  _active: {
    bg: "#967442", // Darker shade on active/click
    transform: "scale(0.99)",
  },
  lineHeight: "25px",
  transition: "transform 0.15s ease-out, background 0.15s ease-out",
  boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
});

const solid = defineStyle((props) => {
  const isSchemeWhite = props.colorScheme === "white";
  const isSchemeBlack = props.colorScheme === "black";

  return {
    borderRadius: 5,
    fontWeight: 500,
    bg: isSchemeWhite
      ? "#FFFFFF"
      : isSchemeBlack
      ? "#212121"
      : `${props.colorScheme}.500`,
    color: isSchemeWhite ? "#000000" : isSchemeBlack ? "#FFFFFF" : "white", // Dark gray text for white scheme, white text for black
    width: "max-content",

    _hover: {
      bg: isSchemeWhite
        ? "#F2F2F2"
        : isSchemeBlack
        ? "#333333"
        : `${props.colorScheme}.600`, // Slightly darker shade on hover
      color: isSchemeWhite ? "#000000" : isSchemeBlack ? "#FFFFFF" : "", // Even darker shade on hover
    },
    _active: {
      bg: isSchemeWhite
        ? "#E6E6E6"
        : isSchemeBlack
        ? "#444444"
        : `${props.colorScheme}.700`, // Even darker shade on active state
      transform: "scale(0.99)",
    },
    transition: "transform 0.15s ease-out, background 0.15s ease-out",
    boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
  };
});

// Outline variant for white and black color schemes
const outline = defineStyle((props) => {
  const isSchemeWhite = props.colorScheme === "white";
  const isSchemeBlack = props.colorScheme === "black";

  return {
    borderRadius: 5,
    borderColor: isSchemeWhite
      ? "#FFFFFF"
      : isSchemeBlack
      ? "#333333"
      : `${props.colorScheme}.500`,
    fontWeight: 500,
    border: "2px solid",
    width: "max-content",
    color: isSchemeWhite
      ? "#FFFFFF"
      : isSchemeBlack
      ? "#000000"
      : `${props.colorScheme}.500`, // Dark gray text for white scheme, white text for black
    _hover: {
      bg: isSchemeWhite
        ? "#F2F2F2"
        : isSchemeBlack
        ? "#333333"
        : `${props.colorScheme}.50`, // Light background on hover
      color: isSchemeWhite
        ? "#000000"
        : isSchemeBlack
        ? "#FFFFFF"
        : `${props.colorScheme}.600`, // Slightly darker text on hover
    },
    _active: {
      bg: isSchemeWhite
        ? "#E6E6E6"
        : isSchemeBlack
        ? "#444444"
        : `${props.colorScheme}.100`, // Slightly darker background on active
      transform: "scale(0.99)",
    },
    transition: "transform 0.15s ease-out, background 0.15s ease-out",
    boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
  };
});

export const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: 5,
    fontWeight: 500,
  },
  variants: {
    solid,
    outline,
    primary,
  },
  defaultProps: {
    colorScheme: "black", // Default color scheme to white
    variant: "solid", // Default variant to solid
  },
});
