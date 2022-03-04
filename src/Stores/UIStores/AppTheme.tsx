import { createContext } from "react";
import { IAppTheme } from "../../Domains/Interfaces/IContextTheme";

export default createContext<IAppTheme>({} as IAppTheme);
