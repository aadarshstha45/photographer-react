import { extendTheme, StyleFunctionProps, ThemeConfig } from "@chakra-ui/react";
import { Button } from "./components/Button";
import { Form } from "./components/Form";
import "@fontsource/poppins";
import { ColorStyle } from "./ColorStyle";
import Switch from "./components/Switch";
import { TextStyles } from "./components/Text";

export const config: ThemeConfig = {
  initialColorMode: "dark", // Set initial mode to dark
  useSystemColorMode: true,
};

export const theme = extendTheme({
  config,
  styles: {
    global: (props: StyleFunctionProps) => ({
      "html, body": {
        fontFamily: "Poppins",
        bg: props.colorMode === "dark" ? "#181818" : ColorStyle.gray["100"], // Dynamic background color based on mode
        color: props.colorMode === "dark" ? "white" : "black", // Text color based on mode
        lineHeight: "normal",
      },
      /* Scrollbar styles */
      "::-webkit-scrollbar": {
        width: "8px",
        height: "6px",
      },
      "::-webkit-scrollbar-track": {
        backgroundColor:
          props.colorMode === "dark"
            ? ColorStyle.gray["600"]
            : ColorStyle.gray["300"],
      },
      "::-webkit-scrollbar-thumb": {
        backgroundColor:
          props.colorMode === "dark"
            ? ColorStyle.gray["200"]
            : ColorStyle.gray["700"],
        borderRadius: "2px",
      },
      "::-webkit-scrollbar-thumb:hover": {
        backgroundColor:
          props.colorMode === "dark"
            ? ColorStyle.primary["700"]
            : ColorStyle.primary["300"],
      },
    }),
  },
  textStyles: TextStyles,
  colors: ColorStyle,
  components: {
    Button,
    Form,
    Switch,
  },
});
