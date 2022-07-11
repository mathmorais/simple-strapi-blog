import { useRouter } from "next/router";
import { FC, useCallback } from "react";
import { useRemarkable } from "../../../hooks/useRemarkable";
import { IArticle } from "../../../interfaces/IArticle";
import { Button } from "../../atoms/Button/Button";
import { TextExtraLarge } from "../../atoms/Typography/Typography";
import {
  ArticleContent,
  ArticleRenderedContent,
  ArticleViewContainer,
} from "./ArticleView.styles";

export const ArticleView: FC<IArticle> = ({
  attributes: { content, title },
  id,
}) => {
  const router = useRouter();
  const { render } = useRemarkable();

  const goBack = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <ArticleViewContainer key={id}>
      <Button onClick={goBack}>Back</Button>
      <ArticleContent>
        <TextExtraLarge>{title}</TextExtraLarge>
        <ArticleRenderedContent dangerouslySetInnerHTML={render(content)} />
      </ArticleContent>
    </ArticleViewContainer>
  );
};
