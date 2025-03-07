"use client";
// @Mui
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
//
import { lightPalette, darkPalette } from "./palette";
import typography from "./typography";
import button from "./button";
import "./index.css";

// ----------------------------------------------------------------------------------------------------

function ThemeProvider({ children }) {
  const palette = lightPalette;

  const baseTheme = createTheme({
    palette,
    typography: typography,
  });

  const theme = createTheme({
    ...baseTheme,
    components: {
      ...button(baseTheme),
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      {children}
      <CssBaseline />
    </MuiThemeProvider>
  );
}

export default ThemeProvider;
