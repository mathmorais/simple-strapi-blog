import { useRouter } from "next/router";
import { FC, useCallback, useMemo } from "react";
import { useRemarkable } from "../../../hooks/useRemarkable";
import { IArticle } from "../../../interfaces/IArticle";
import { Button } from "../../atoms/Button/Button";
import {
  TextExtraSmall,
  TextMedium,
  TextSmall,
} from "../../atoms/Typography/Typography";
import { ArticleContainer, ArticleContentPreview } from "./Article.styles";

export const Article: FC<IArticle> = ({
  attributes: { content, title },
  id,
}) => {
  const router = useRouter();
  const { render } = useRemarkable();

  const handleOnClick = useCallback(
    () => router.push(`article/${id}`),
    [id, router]
  );

  return (
    <ArticleContainer>
      <TextMedium>{title}</TextMedium>
      <ArticleContentPreview
        family={"secondary"}
        dangerouslySetInnerHTML={render(content)}
      />
      <Button onClick={handleOnClick}>View</Button>
    </ArticleContainer>
  );
};
