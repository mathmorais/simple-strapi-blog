import { FCC } from "react";
import { Header } from "../../molecules/Header/Header";
import { AppStructureMain, AppStructureWrapper } from "./AppStructure.styles";

export const AppStructure: FCC = ({ children }) => {
  return (
    <AppStructureWrapper>
      <Header />
      <AppStructureMain>{children}</AppStructureMain>
    </AppStructureWrapper>
  );
};
