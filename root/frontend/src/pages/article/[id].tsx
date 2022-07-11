import { useMemo } from "react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { Fade } from "../../components/organisms/Fade/Fade";
import { CentralizedContent } from "../../components/templates/CentralizedContent/CentralizedContent";
import { IArticle } from "../../interfaces/IArticle";
import { getArticle, getArticles } from "../../services/articles";
import { ArticleView } from "../../components/molecules/ArticleView/ArticleView";

type ArticlePageProps = {
  article: IArticle;
};

const ArticlePage: NextPage<ArticlePageProps> = ({ article }) => {
  const articleContent = useMemo(() => {
    if (!article) return;

    return (
      <Fade>
        <ArticleView {...article} />
      </Fade>
    );
  }, [article]);

  return <CentralizedContent>{articleContent}</CentralizedContent>;
};

export default ArticlePage;

export const getStaticPaths: GetStaticPaths<{}> = async () => {
  try {
    const response = await getArticles();
    const articles = response.data.data;

    if (articles.length <= 0) throw new Error("None articles");

    const paths = articles.map((article) => ({
      params: { id: String(article.id) },
    }));

    return {
      paths: paths,
      fallback: true,
    };
  } catch (err) {
    return {
      paths: [],
      fallback: "blocking",
    };
  }
};

export const getStaticProps: GetStaticProps<ArticlePageProps> = async (ctx) => {
  const revalidateTimeInSeconds = 60;
  const articleId = ctx.params?.id ?? 0;

  try {
    const response = await getArticle(String(articleId));

    const article = response.data.data;

    return {
      props: {
        article,
      },
      revalidate: revalidateTimeInSeconds,
    };
  } catch (err) {
    return {
      props: {
        article: {
          id: 1,

          attributes: {
            title: "An error occurred",
            content: "(Article not found)",
          },
        },
      },
    };
  }
};
