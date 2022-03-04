import { Interpolation } from "@emotion/react";
import { Theme } from "@mui/material/styles/createTheme";
import {
  AppThemeAction,
  AppThemeKind,
} from "../../../Domains/Enums/AppThemeEnums";

interface IState {
  theme: Theme;
  globalStyles?: Interpolation<Theme>;
  themeKind: AppThemeKind;
}

interface IAction {
  type: AppThemeAction;
  payload: IState;
}

export default function reducer(state: IState, action: IAction): IState {
  const { type, payload } = action;

  switch (
    type //Dark OR Light
  ) {
    case AppThemeAction.SetTheme:
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
