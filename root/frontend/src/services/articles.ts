import { IStripeDTO } from "../interfaces/dtos/IStripeDTO";
import { IArticle } from "../interfaces/IArticle";
import { api } from "../utils/api";

export const getArticles = async () => {
  return await api.get<IStripeDTO<IArticle[]>>("/articles");
};

export const getArticle = async (id: string | number) => {
  return await api.get<IStripeDTO<IArticle>>(`/articles/${id}`);
};
