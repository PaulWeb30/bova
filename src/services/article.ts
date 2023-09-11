import axios, { AxiosResponse } from 'axios'
import { IArticle } from '../@types/article'
import { API_URL } from '../constants'
const ArticleApi = {
	fetchArticles: async (page: number, query: string | null) => {
		const { data }: AxiosResponse<{ articles: IArticle[] }> = await axios.get(
			API_URL + `&page=${page}&max=10&q=${query}`
		)
		return data
	},
}

export default ArticleApi
