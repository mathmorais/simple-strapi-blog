type FontMap = {
  sizeInRem: number;
  lineHeightInPixel: number;
};

export interface IFont {
  ExtraSmall: FontMap;
  Small: FontMap;
  Medium: FontMap;
  Large: FontMap;
  ExtraLarge: FontMap;

  families: {
    default: string;
    secondary: string;
  };
}
