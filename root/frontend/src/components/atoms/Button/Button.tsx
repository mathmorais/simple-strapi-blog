import { ButtonHTMLAttributes, FCC } from "react";
import { TextSmall } from "../Typography/Typography";
import { ButtonContainer } from "./Button.styles";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FCC<ButtonType> = ({ children, ...props }) => {
  return (
    <ButtonContainer {...props}>
      <TextSmall>{children}</TextSmall>
    </ButtonContainer>
  );
};
