import { StyleFunctionProps } from "@chakra-ui/react";

export const reactDatepickerStyles = (props: StyleFunctionProps) => ({
  ":root": {
    "--background-color":
      props.colorMode === "dark"
        ? "var(--chakra-colors-gray-900)"
        : "var(--chakra-colors-gray-100)",
    "--border-color":
      props.colorMode === "dark"
        ? "var(--chakra-colors-gray-600)"
        : "var(--chakra-colors-gray-300)",
    "--font-color": props.colorMode === "dark" ? "#FFF" : "#000",
    "--box-shadow":
      props.colorMode === "dark"
        ? "0 1px 2px 0 rgba(255, 255, 255, 0.1)"
        : "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  },
  ".react-datepicker": {
    backgroundColor: "var(--background-color) !important",
    color: "var(--font-color) !important",
    border: "1px solid var(--border-color) !important",
    boxShadow: "var(--box-shadow) !important",
    zIndex: "999999999999999999 !important",
  },
  ".react-datepicker__triangle": {
    display: "none !important",
  },
  ".react-datepicker__header": {
    backgroundColor: "var(--background-color) !important",
    color: "var(--font-color) !important",
    borderBottom: "1px solid var(--border-color) !important",
    padding: "10px !important",
  },
  ".react-datepicker-wrapper": {
    width: "100% !important",
  },
  ".react-datepicker-popper": {
    width: "100% !important",
    mt: "10px !important",
  },
  ".react-datepicker__month-container": {
    position: "relative !important",
  },
  ".react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name":
    {
      color: "var(--font-color) !important",
      fontWeight: "600 !important",
      borderRadius: "50% !important",
      _hover: {
        backgroundColor:
          props.colorMode === "dark"
            ? "gray.200 !important" // Light color on hover for dark mode
            : "gray.700 !important", // Dark color on hover for light mode
        color:
          props.colorMode === "dark"
            ? "#000 !important" // Light color for selection in dark mode
            : "#FFF !important", // Dark color for selection in light mode
      },
    },

  ".react-datepicker__day--keyboard-selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range, .react-datepicker__month-text--selected, .react-datepicker__month-text--in-selecting-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--selected, .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--selected, .react-datepicker__year-text--in-selecting-range, .react-datepicker__year-text--in-range, .react-datepicker__time-list-item--selected":
    {
      backgroundColor:
        props.colorMode === "dark"
          ? "gray.200 !important" // Light color for selection in dark mode
          : "gray.700 !important", // Dark color for selection in light mode
      color:
        props.colorMode === "dark"
          ? "#FFF !important" // Light color for selection in dark mode
          : "#000 !important", // Dark color for selection in light mode
    },

  ".react-datepicker__day--disabled": {
    fontWeight: "400 !important",
    color:
      props.colorMode === "dark"
        ? "var(--chakra-colors-gray-600) !important"
        : `var(--chakra-colors-gray-400) !important`,
    backgroundColor: "transparent !important",
    cursor: "not-allowed !important",
  },

  ".react-datepicker__current-month, .react-datepicker__header:not(.react-datepicker__header--has-time-select)":
    {
      backgroundColor:
        props.colorMode === "dark" ? "gray.900" : "gray.50 !important",
      color: "var(--font-color) !important",
      fontWeight: "500 !important",
    },
  ".react-datepicker__year-dropdown-container--select, .react-datepicker__month-dropdown-container--select, .react-datepicker__month-year-dropdown-container--select, .react-datepicker__year-dropdown-container--scroll, .react-datepicker__month-dropdown-container--scroll, .react-datepicker__month-year-dropdown-container--scroll":
    {
      backgroundColor:
        props.colorMode === "dark" ? "gray.900" : "gray.50 !important",
      color: "var(--font-color) !important",
      fontWeight: "600 !important",
      display: "inline-flex !important",
      padding: "5px 10px !important",
      margin: "0 10px !important",
    },
  ".react-datepicker__navigation, .react-datepicker__navigation--next": {
    border: "none !important",
    borderRadius: "50% !important",
  },

  ".react-datepicker__month-select, .react-datepicker__year-select": {
    width: "100% !important",
    padding: "5px 10px !important",
    borderRadius: "5px !important",
    fontWeight: "500 !important",
    border: "1px solid var(--border-color) !important",
    backgroundColor: "var(--background-color) !important",
    boxShadow: "var(--box-shadow) !important",
  },
  ".react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type=time]":
    {
      width: "100% !important",
      padding: "5px 10px !important",
      borderRadius: "5px !important",
      border: "1px solid var(--border-color) !important",
      backgroundColor: "var(--background-color) !important",
      fontWeight: "500 !important",
    },
  ".react-datepicker__day--selected": {
    backgroundColor:
      props.colorMode === "dark"
        ? "gray.100 !important"
        : "gray.800 !important",
    fontWeight: "600 !important",

    color:
      props.colorMode === "dark"
        ? "#000 !important" // Light color for selection in dark mode
        : "#FFF !important", // Dark color for selection in light mode
  },
});
