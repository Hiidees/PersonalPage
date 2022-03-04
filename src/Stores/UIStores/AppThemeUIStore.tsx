import { Interpolation, ThemeProvider } from "@emotion/react";
import createTheme, {
  Theme,
  ThemeOptions,
} from "@mui/material/styles/createTheme";
import React, { useContext, useReducer } from "react";
import { createContext } from "react";
import { ThemeKind } from "../../Enums/ThemeKind";
import * as DarkTheme from "../Data/Themes/DarkTheme.json";
import * as LightTheme from "../Data/Themes/LightTheme.json";
import * as GlobalDarkStyles from "../Data/GlobalStyles/GlobalDarkStyles.json";
import * as GlobalLightStyles from "../Data/GlobalStyles/GlobalLightStyles.json";
import GlobalStyles from "@mui/material/GlobalStyles";

interface IStore {
  theme: Theme;
  themeKind: ThemeKind;
  globalStyles?: Interpolation<Theme>;
  setTheme: (themeKind: ThemeKind) => void;
}
const Context = createContext<IStore>({} as IStore);

interface IState {
  theme: Theme;
  globalStyles?: Interpolation<Theme>;
  themeKind: ThemeKind;
}

enum ActionKind {
  SetTheme,
}
interface IAction {
  type: ActionKind;
  payload: IState;
}
function reducer(state: IState, action: IAction): IState {
  const { type, payload } = action;

  switch (
    type //Dark OR Light
  ) {
    case ActionKind.SetTheme:
      return {
        ...state,
        theme: payload.theme,
        globalStyles: payload.globalStyles,
        themeKind: payload.themeKind,
      };

    default:
      return state;
  }
}

interface IProviderProps {}

function AppThemeProvider(props: React.PropsWithChildren<IProviderProps>) {
  const { children } = props;

  const darkTheme = createTheme(DarkTheme as ThemeOptions);
  const lightTheme = createTheme(LightTheme as ThemeOptions);

  const initialState: IStore = {
    // We should take initial state from cookies/local storage
    theme: darkTheme,
    globalStyles: GlobalDarkStyles,
    themeKind: ThemeKind.Dark,
    setTheme: setTheme,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  function setTheme(themeKind: ThemeKind): void {
    let theme = darkTheme;
    let globalStyles = GlobalDarkStyles;
    switch (themeKind) {
      case ThemeKind.Dark:
        theme = darkTheme;
        globalStyles = GlobalDarkStyles;
        break;
      case ThemeKind.Light:
        theme = lightTheme;
        globalStyles = GlobalLightStyles;
        break;
    }

    const action: IAction = {
      type: ActionKind.SetTheme,
      payload: {
        theme: theme,
        globalStyles: globalStyles,
        themeKind: themeKind,
      },
    };
    dispatch(action);
  }

  return (
    <Context.Provider
      value={{
        theme: state.theme,
        globalStyles: state.globalStyles,
        themeKind: state.themeKind,
        setTheme: setTheme,
      }}
    >
      <ThemeProvider theme={state.theme}>
        <GlobalStyles styles={state.globalStyles} />
        {children}
      </ThemeProvider>
    </Context.Provider>
  );
}

function useAppTheme() {
  return useContext(Context);
}

export { AppThemeProvider, useAppTheme };
