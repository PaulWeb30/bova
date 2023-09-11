import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import ArticleApi from '../../services/article'
import { IArticle } from '../../@types/article'
import { RootState } from '../store'

type IArticleSlice = {
	articles: IArticle[]
	loadingStatus: 'idle' | 'loading' | 'error'
	page: number
}
const initialState: IArticleSlice = {
	articles: [],
	loadingStatus: 'idle',
	page: 1,
}

export const fetchArticlesThunk = createAsyncThunk<
	{ articles: IArticle[] },
	string | null,
	{ rejectValue: string }
>('goods/fetchAllArticles', async (query = 'expample', { getState }) => {
	const state = getState() as RootState
	const page = state.article.page
	const data = await ArticleApi.fetchArticles(page, query)
	return data
})
const articleSlice = createSlice({
	name: 'articleSlice',
	initialState,
	reducers: {
		setPage(state, action: PayloadAction<number>) {
			if (action.payload <= 10) {
				state.page = action.payload
			}
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchArticlesThunk.fulfilled, (state, action) => {
				state.loadingStatus = 'idle'
				state.articles = state.articles.concat(action.payload.articles)
			})
			.addCase(fetchArticlesThunk.pending, state => {
				if (state.page === 1) {
					state.loadingStatus = 'loading'
				}
			})
			.addCase(fetchArticlesThunk.rejected, state => {
				state.loadingStatus = 'error'
			})
			.addDefaultCase(() => {})
	},
})

export const selectLoadingStatus = (state: RootState) =>
	state.article.loadingStatus
export const selectArticles = (state: RootState) => state.article.articles
export const selectPage = (state: RootState) => state.article.page
export const { reducer: articleReducer, actions: articleActions } = articleSlice
