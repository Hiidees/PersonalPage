import { ThemeProvider } from "@emotion/react";
import { Theme } from "@mui/material/styles/createTheme";
import React, { useContext, useReducer } from "react";
import { createContext } from "react";
import { darkTheme, lightTheme } from "../../Services/ThemeService";

export enum ThemeKind {
  Dark,
  Light
}

interface IState {
  theme: Theme;
  themeKind: ThemeKind;
}

export interface IStore {
  theme: Theme;
  themeKind: ThemeKind;
  setTheme: (themeKind: ThemeKind) => void;
}

enum IActionKind {
  SetTheme
}

interface IStoreAction {
  type: IActionKind;
  payload: IState;
}

interface IProviderProps {
  
}


const Context = createContext<IStore>({} as IStore);

function reducer(state: IState, action: IStoreAction): IState {

  const { type, payload } = action;

  const ret = state;

  switch (type) {

    case IActionKind.SetTheme:
      return {
        ...state,
        theme: payload.theme,
        themeKind: payload.themeKind
      };

    default:
      return state;
  }    

}

function ThemeUIStoreProvider(props: React.PropsWithChildren<IProviderProps>) {
  
  const { children } = props;
  
  const initialState: IStore = {
    theme: darkTheme,
    themeKind: ThemeKind.Dark,
    setTheme: setTheme
  };
  
  const [state, dispatch] = useReducer(reducer, initialState);

  function setTheme(themeKind: ThemeKind) : void {

    let theme;
    switch(themeKind) {

      case ThemeKind.Dark:
        theme = darkTheme;
        break;

      case ThemeKind.Light:
        theme = lightTheme;
        break;

      default:
        theme = darkTheme;

    }

    const action: IStoreAction = {
      type: IActionKind.SetTheme,
      payload: {
        theme: theme,
        themeKind: themeKind
      }
    };

    dispatch(action)

    var a = state;
    var b = a;
  }

  return (
    <Context.Provider value={{
      theme: state.theme,
      themeKind: state.themeKind,
      setTheme: setTheme
    }}>
      <ThemeProvider theme={state.theme}>{children}</ThemeProvider>
    </Context.Provider>
  );
};

function useThemeUIStore() {
  return useContext(Context);
}

export { ThemeUIStoreProvider, useThemeUIStore };