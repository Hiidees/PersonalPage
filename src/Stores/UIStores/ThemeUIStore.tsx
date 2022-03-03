import { ThemeProvider } from "@emotion/react";
import { Theme } from "@mui/material/styles/createTheme";
import React, { useContext, useReducer } from "react";
import { createContext } from "react";
import { darkTheme, lightTheme } from "../../Services/ThemeService";

export enum ThemeKind {
  Dark,
  Light
}
interface IStore {
  theme: Theme;
  themeKind: ThemeKind;
  setTheme: (themeKind: ThemeKind) => void;
}
const Context = createContext<IStore>({} as IStore);

interface IState {
  theme: Theme;
  themeKind: ThemeKind;
}
enum ActionKind {
  SetTheme
}
interface IAction {
  type: ActionKind;
  payload: IState;
}
function reducer(state: IState, action: IAction): IState {
  const { type, payload } = action;

  switch (type) {
    case ActionKind.SetTheme:
      return {
        ...state,
        theme: payload.theme,
        themeKind: payload.themeKind
      };

    default:
      return state;
  }
}

interface IProviderProps {
}
function ThemeUIStoreProvider(props: React.PropsWithChildren<IProviderProps>) {
  const { children } = props;
  
  const initialState: IStore = { // We should take initial state from cookies/local storage
    theme: darkTheme,
    themeKind: ThemeKind.Dark,
    setTheme: setTheme
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  function setTheme(themeKind: ThemeKind) : void {

    let theme = darkTheme;
    switch(themeKind) {
      case ThemeKind.Dark:
        theme = darkTheme;
        break;
      case ThemeKind.Light:
        theme = lightTheme;
        break;
    }

    const action: IAction = {
      type: ActionKind.SetTheme,
      payload: {
        theme: theme,
        themeKind: themeKind
      }
    };
    dispatch(action)
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