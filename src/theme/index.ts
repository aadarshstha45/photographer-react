import { extendTheme, StyleFunctionProps, ThemeConfig } from "@chakra-ui/react";
import "@fontsource-variable/inter";
import { ColorStyle } from "./ColorStyle";
import { Button } from "./components/Button";
import { reactDatepickerStyles } from "./components/Datepicker";
import { Form } from "./components/Form";
import { scrollbar } from "./components/Scrollbar";
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
      ...scrollbar(props),
      ...reactDatepickerStyles(props),
    }),
  },
  colors: ColorStyle,
  components: {
    Button,
    Form,
    Switch,
  },
});
