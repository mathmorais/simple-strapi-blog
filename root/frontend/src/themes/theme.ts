import { useMemo } from "react";
import { ITheme } from "../interfaces/theme/ITheme";
import { themeClassicColors } from "./colors.classic";
import { themeDarkColors } from "./colors.dark";
import { themeFont } from "./font";

export enum EThemes {
  classic,
  dark,
}

export const useAppTheme = (theme: EThemes): ITheme => {
  const colors = useMemo(() => {
    switch (theme) {
      case EThemes.classic:
        return themeClassicColors;
      case EThemes.dark:
        return themeDarkColors;
      default:
        return themeClassicColors;
    }
  }, [theme]);

  const font = themeFont;

  return {
    colors,
    font,
  };
};
