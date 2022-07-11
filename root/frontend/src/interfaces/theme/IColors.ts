export type ColorSwatch = {
  default: string;
  shades?: Record<number, string>;
};

export interface IColors {
  primarySwatch: ColorSwatch;
  secondarySwatch?: ColorSwatch;
  tertiarySwatch?: ColorSwatch;
  neutralSwatch: ColorSwatch;
  white: string;
  black: string;
}
