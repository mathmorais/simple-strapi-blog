import { FC, useMemo } from "react";
import { IArticle } from "../../../interfaces/IArticle";
import { Article } from "../../molecules/Article/Article";
import { ArticleListContainer, ArticleListWrapper } from "./ArticleList.styles";

type ArticleListProps = {
  articles: IArticle[];
};

export const ArticleList: FC<ArticleListProps> = ({ articles }) => {
  const componentizedArticles = useMemo(
    () =>
      articles.map((article, index) => <Article key={index} {...article} />),
    [articles]
  );

  return (
    <ArticleListWrapper>
      <ArticleListContainer>{componentizedArticles}</ArticleListContainer>
    </ArticleListWrapper>
  );
};
