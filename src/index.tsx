import React from "react";
import ReactDOM from "react-dom";
import RouteProvider from "./Router";
import CssBaseline from "@mui/material/CssBaseline";
import { AppThemeProvider } from "./Components/Providers/AppThemeProvider";

ReactDOM.render(
  <React.StrictMode>
    <AppThemeProvider>
      <CssBaseline />
      <RouteProvider />
    </AppThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
