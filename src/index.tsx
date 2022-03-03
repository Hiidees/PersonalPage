import React from "react";
import ReactDOM from "react-dom";
import RouteProvider from "./RouteProvider";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme } from "./Services/ThemeService";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouteProvider />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
