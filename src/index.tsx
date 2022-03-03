import React from "react";
import ReactDOM from "react-dom";
import RouteProvider from "./RouteProvider";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeUIStoreProvider } from "./Stores/UIStores/ThemeUIStore";

ReactDOM.render(
  <React.StrictMode>
    <ThemeUIStoreProvider>
      <CssBaseline />
      <RouteProvider />
    </ThemeUIStoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
