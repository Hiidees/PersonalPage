import { Interpolation } from "@emotion/react";
import { Theme } from "@mui/material/styles/createTheme";
import { AppThemeKind } from "../Enums/AppThemeEnums";

export interface IAppTheme {
  theme: Theme;
  themeKind: AppThemeKind;
  globalStyles?: Interpolation<Theme>;
  setTheme: (themeKind: AppThemeKind) => void;
}
