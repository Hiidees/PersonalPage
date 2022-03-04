import { useContext } from "react";
import AppThemeUIStore from "../Stores/UIStores/AppTheme";

export default function useAppTheme() {
  return useContext(AppThemeUIStore);
}
