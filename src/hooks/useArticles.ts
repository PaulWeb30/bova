import React from 'react'
import {
	selectLoadingStatus,
	selectArticles,
	selectPage,
} from '../redux/slices/article'
import { useLocation } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { fetchArticlesThunk } from '../redux/slices/article'

export default function useArticles() {
	const location = useLocation()
	const queryParams = new URLSearchParams(location.search)
	const searchParam = queryParams.get('search')
	const dispatch = useAppDispatch()

	const loadingStatus = useAppSelector(selectLoadingStatus)
	const articles = useAppSelector(selectArticles)
	const page = useAppSelector(selectPage)

	React.useEffect(() => {
		dispatch(fetchArticlesThunk(searchParam))
	}, [dispatch, page])

	return { articles, loadingStatus }
}
