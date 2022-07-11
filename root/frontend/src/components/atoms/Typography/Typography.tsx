import styled, { css } from "styled-components";
import { IFont } from "../../../interfaces/theme/IFont";

export type TextStyleProps = {
  color?: "black" | "white";
  weight?: number;
  family?: keyof IFont["families"];
};

const TextFamilyHandler = (family: TextStyleProps["family"]) => {
  return css`
    ${({ theme: { font } }) => {
      switch (family) {
        case "default":
          return font.families.default;
        case "secondary":
          return font.families.secondary;
        default:
          return font.families.default;
      }
    }}
  `;
};

const Text = styled.p<TextStyleProps>`
  font-family: ${({ family }) => TextFamilyHandler(family)};
  font-weight: ${({ weight }) => weight ?? 500};
  color: ${({ theme: { colors }, color }) =>
    color === "black" ? colors.black : colors.white};
  text-overflow: clip;
  white-space: pre-wrap;
`;

export const TextExtraLarge = styled(Text).attrs({ as: "h1" })`
  ${({
    theme: {
      font: { ExtraLarge },
    },
  }) => css`
    font-size: ${ExtraLarge.sizeInRem}rem;
    line-height: ${ExtraLarge.lineHeightInPixel}px;
  `}
`;

export const TextLarge = styled(Text).attrs({ as: "h2" })`
  ${({
    theme: {
      font: { Large },
    },
  }) => css`
    font-size: ${Large.sizeInRem}rem;
    line-height: ${Large.lineHeightInPixel}px;
  `}
`;

export const TextMedium = styled(Text).attrs({ as: "h3" })`
  ${({
    theme: {
      font: { Medium },
    },
  }) => css`
    font-size: ${Medium.sizeInRem}rem;
    line-height: ${Medium.lineHeightInPixel}px;
  `}
`;

export const TextSmall = styled(Text)`
  ${({
    theme: {
      font: { Small },
    },
  }) => css`
    font-size: ${Small.sizeInRem}rem;
    line-height: ${Small.lineHeightInPixel}px;
  `}
`;

export const TextExtraSmall = styled(Text)`
  ${({
    theme: {
      font: { ExtraSmall },
    },
  }) => css`
    font-size: ${ExtraSmall.sizeInRem}rem;
    line-height: ${ExtraSmall.lineHeightInPixel}px;
  `}
`;
