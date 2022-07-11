import styled, { css } from "styled-components";

const ButtonHover = css`
  &:hover {
    background: ${({ theme: { colors } }) => colors.primarySwatch.default}99;
  }
  transition: background 0.1s ease-in;
`;

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme: { colors } }) => colors.primarySwatch.default};
  border: none;
  padding: 0 15px;
  border-radius: 2px;
  cursor: pointer;
  width: fit-content;
  ${ButtonHover};

  p {
    font-weight: 500;
  }
`;
