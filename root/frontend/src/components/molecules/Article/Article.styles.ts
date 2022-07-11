import styled, { css } from "styled-components";
import { TextSmall } from "../../atoms/Typography/Typography";

export const ArticleContainer = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 25px;
  width: 100%;
  gap: 10px;
  height: 200px;

  ${({ theme: { colors } }) => css`
    background: linear-gradient(${colors.black} 0 0) padding-box,
      linear-gradient(
          to right,
          ${colors.primarySwatch.default},
          ${colors.primarySwatch.default}90
        )
        border-box;
  `};

  border: 4px solid transparent;
  border-radius: 8px;

  * {
    color: ${({ theme }) => theme.colors.white};
  }

  h3 {
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    display: -webkit-box;
  }

  button {
    margin-top: auto;
  }
`;

export const ArticleContentPreview = styled(TextSmall).attrs({ as: "div" })`
  max-height: 50px;
  overflow: hidden;
`;
