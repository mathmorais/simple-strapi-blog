import styled from "styled-components";
import { TextMedium } from "../../atoms/Typography/Typography";

export const ArticleViewContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ArticleContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  h1 {
    font-weight: bold;
  }
`;

export const ArticleRenderedContent = styled(TextMedium).attrs({ as: "div" })`
  display: flex;
  flex-direction: column;
  gap: 35px;
  font-weight: 400;

  img {
    max-width: 200px;
  }
`;
