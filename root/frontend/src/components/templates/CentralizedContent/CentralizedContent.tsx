import { FCC } from "react";
import { CentralizedContentContainer } from "./CentralizedContent.styles";

export const CentralizedContent: FCC = ({ children }) => {
  return <CentralizedContentContainer>{children}</CentralizedContentContainer>;
};
