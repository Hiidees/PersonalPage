import { ThemeContext, ThemeProvider } from "@emotion/react";
import { Theme } from "@mui/material/styles/createTheme";
import React, { useReducer, useState } from "react";
import { createContext } from "react";
import IUITheme from "../../Interfaces/IUITheme";
import { darkTheme } from "../../Services/ThemeService";

interface IUIThemeProviderProps {
  initialState: IUITheme;
}
const initialState = { theme: darkTheme };
const context = createContext<IUITheme>(initialState);

function reducer(state: IUITheme, action: any): Theme {
  return darkTheme;
}

export const UIThemeProvider = (
  props: React.PropsWithChildren<IUIThemeProviderProps>
) => {
  const [themeState, dispatchThemeAction] = useReducer(reducer, initialState);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useUITheme = () => React.useContext(context);
