import { alpha } from "@mui/material/styles";

const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
  500_8: alpha("#919EAB", 0.08),
  500_12: alpha("#919EAB", 0.12),
  500_16: alpha("#919EAB", 0.16),
  500_24: alpha("#919EAB", 0.24),
  500_32: alpha("#919EAB", 0.32),
  500_48: alpha("#919EAB", 0.48),
  500_56: alpha("#919EAB", 0.56),
  500_80: alpha("#919EAB", 0.8),
};

const SUCCESS = {
  lighter: "#E9FCD4",
  light: "#AAF27F",
  main: "#54D62C",
  dark: "#229A16",
  darker: "#08660D",
};

const WARNING = {
  lighter: "#FFF7CD",
  light: "#FFE16A",
  main: "#FFC107",
  dark: "#B78103",
  darker: "#7A4F01",
};

const ERROR = {
  lighter: "#FFE7D9",
  light: "#FFA48D",
  main: "#FF4842",
  dark: "#B72136",
  darker: "#7A0C2E",
};

const lightPalette = {
  mode: "light",
  primary: {
    main: "#FE7FA7",
    light: "#FFAAC5",
    dark: "#C45A7B",
    contrastText: "#FFFFFF",
  },
  secondary: {
    main: "#939598",
    light: "#B4B6B9",
    dark: "#6D6E71",
    contrastText: "#FFFFFF",
  },
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  background: {
    default: "#FFFFFF",
    paper: "#F7F7F7",
  },
  text: {
    primary: "#1F1F1F",
    secondary: "#6D6E71",
  },
};

const darkPalette = {
  mode: "dark",
  primary: {
    main: "#FE7FA7",
    light: "#FFAAC5",
    dark: "#C45A7B",
    contrastText: "#1F1F1F",
  },
  secondary: {
    main: "#939598",
    light: "#B4B6B9",
    dark: "#6D6E71",
    contrastText: "#1F1F1F",
  },
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  background: {
    default: "#121212",
    paper: "#1E1E1E",
  },
  text: {
    primary: "#FFFFFF",
    secondary: "#B4B6B9",
  },
};

export { lightPalette, darkPalette };
