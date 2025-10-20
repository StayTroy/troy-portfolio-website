import { createContext, useContext } from "react";

export type DarkModeContextType = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

export const DarkModeContext = createContext<DarkModeContextType>({
  darkMode: false,
  setDarkMode: () => {},
});

export const useDarkMode = () => useContext(DarkModeContext);
