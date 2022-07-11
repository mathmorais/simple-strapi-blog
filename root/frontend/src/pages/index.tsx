import type { GetStaticProps, NextPage } from "next";
import { ArticleList } from "../components/organisms/ArticleList/ArticleList";
import { Fade } from "../components/organisms/Fade/Fade";
import { CentralizedContent } from "../components/templates/CentralizedContent/CentralizedContent";
import { IArticle } from "../interfaces/IArticle";
import { getArticles } from "../services/articles";

type HomePageProps = {
  articles: IArticle[];
};

const HomePage: NextPage<HomePageProps> = ({ articles }) => {
  return (
    <CentralizedContent>
      <Fade>
        <ArticleList articles={articles} />
      </Fade>
    </CentralizedContent>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const revalidateTimeInSec = 60;

  try {
    const response = await getArticles();
    const articles = response.data.data;

    return {
      props: {
        articles: articles,
      },
      revalidate: revalidateTimeInSec,
    };
  } catch (err) {
    return {
      props: {
        articles: [],
      },
    };
  }
};
