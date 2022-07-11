import { ITheme } from "./interfaces/theme/ITheme";

type Theme = ITheme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
