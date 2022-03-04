import createTheme, {
  Theme,
  ThemeOptions,
} from "@mui/material/styles/createTheme";
import * as DarkTheme from "../../Stores/Data/Themes/DarkTheme.json";
import * as LightTheme from "../../Stores/Data/Themes/LightTheme.json";
import * as GlobalDarkStyles from "../../Stores/Data/GlobalStyles/GlobalDarkStyles.json";
import * as GlobalLightStyles from "../../Stores/Data/GlobalStyles/GlobalLightStyles.json";
import { AppThemeKind } from "../../Domains/Enums/AppThemeEnums";
import { useReducer } from "react";
import AppThemeUIStore from "../../Stores/UIStores/AppTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import GlobalStyles from "@mui/material/GlobalStyles";
import { IAppTheme } from "../../Domains/Interfaces/IContextTheme";
import { AppThemeAction } from "../../Domains/Enums/AppThemeEnums";
import reducer from "./reducers/AppThemeReducer";

interface IProviderProps {}

function AppThemeProvider(props: React.PropsWithChildren<IProviderProps>) {
  const { children } = props;

  const darkTheme = createTheme(DarkTheme as ThemeOptions);
  const lightTheme = createTheme(LightTheme as ThemeOptions);

  const initialState: IAppTheme = {
    // We should take initial state from cookies/local storage
    theme: darkTheme,
    globalStyles: GlobalDarkStyles,
    themeKind: AppThemeKind.Dark,
    setTheme: setTheme,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  function setTheme(themeKind: AppThemeKind): void {
    let theme = darkTheme;
    let globalStyles = GlobalDarkStyles;
    switch (themeKind) {
      case AppThemeKind.Dark:
        theme = darkTheme;
        globalStyles = GlobalDarkStyles;
        break;
      case AppThemeKind.Light:
        theme = lightTheme;
        globalStyles = GlobalLightStyles;
        break;
    }

    const action = {
      type: AppThemeAction.SetTheme,
      payload: {
        theme: theme,
        globalStyles: globalStyles,
        themeKind: themeKind,
      },
    };
    dispatch(action);
  }

  return (
    <AppThemeUIStore.Provider
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
    </AppThemeUIStore.Provider>
  );
}

export { AppThemeProvider };
