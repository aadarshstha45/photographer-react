import { extendTheme, StyleFunctionProps, ThemeConfig } from "@chakra-ui/react";
import { Button } from "./components/Button";
import { Form } from "./components/Form";
import "@fontsource/poppins";
import { ColorStyle } from "./ColorStyle";
import Switch from "./components/Switch";
import { TextStyles } from "./components/Text";
import { scrollbar } from "./components/Scrollbar";
import { reactDatepickerStyles } from "./components/DatePicker";

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
      ...scrollbar(props),
      ...reactDatepickerStyles(props),
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
