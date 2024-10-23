import { StyleFunctionProps } from "@chakra-ui/react";
import { ColorStyle } from "../ColorStyle";

export const scrollbar = (props: StyleFunctionProps) => ({
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
});
