import React from "react";
import ReactDOM from "react-dom";
import RouteProvider from "./RouteProvider";
import CssBaseline from "@mui/material/CssBaseline";
import { AppThemeProvider } from "./Stores/UIStores/AppThemeUIStore";

ReactDOM.render(
  <React.StrictMode>
    <AppThemeProvider>
      <CssBaseline />
      <RouteProvider />
    </AppThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
