import { FC, PRops } from "react";

declare module "react" {
  export type FCC<T = {}> = FC<PropsWithChildren<T>>;
}
