import { extendTheme, StyleFunctionProps, ThemeConfig } from "@chakra-ui/react";
import { Button } from "./components/Button";
import { Form } from "./components/Form";
import "@fontsource-variable/inter";
import { ColorStyle } from "./ColorStyle";
import Switch from "./components/Switch";

export const config: ThemeConfig = {
  initialColorMode: "system", // Set initial mode to dark
  useSystemColorMode: true,
};

export const theme = extendTheme({
  config,
  styles: {
    global: (props: StyleFunctionProps) => ({
      "html, body": {
        fontFamily: "Inter Variable",
        bg: props.colorMode === "dark" ? ColorStyle.gray["800"] : "white", // Dynamic background color based on mode
        color: props.colorMode === "dark" ? "white" : "black", // Text color based on mode
      },
      /* Scrollbar styles */
      "::-webkit-scrollbar": {
        width: "6px",
        height: "6px",
      },
      "::-webkit-scrollbar-track": {
        backgroundColor:
          props.colorMode === "dark"
            ? ColorStyle.gray["800"]
            : ColorStyle.gray["100"],
      },
      "::-webkit-scrollbar-thumb": {
        backgroundColor:
          props.colorMode === "dark"
            ? ColorStyle.primary["900"]
            : ColorStyle.primary["500"],
        borderRadius: "6px",
      },
      "::-webkit-scrollbar-thumb:hover": {
        backgroundColor:
          props.colorMode === "dark"
            ? ColorStyle.primary["700"]
            : ColorStyle.primary["300"],
      },
    }),
  },
  colors: ColorStyle,
  components: {
    Button,
    Form,
    Switch,
  },
});
