import { IFont } from "../interfaces/theme/IFont";

export const themeFont: IFont = {
  ExtraSmall: { sizeInRem: 1.2, lineHeightInPixel: 16 },
  Small: { sizeInRem: 1.4, lineHeightInPixel: 24 },
  Medium: { sizeInRem: 1.8, lineHeightInPixel: 24 },
  Large: { sizeInRem: 2.4, lineHeightInPixel: 32 },
  ExtraLarge: { sizeInRem: 3.2, lineHeightInPixel: 48 },

  families: { default: "Montserrat", secondary: "Noto Serif" },
};
