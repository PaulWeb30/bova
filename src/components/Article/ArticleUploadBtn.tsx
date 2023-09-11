import { selectPage } from '../../redux/slices/article'
import { articleActions } from '../../redux/slices/article'
import { useAppSelector, useActionCreators } from '../../redux/hooks'
import { useInView } from 'react-intersection-observer'
import Button from '@mui/material/Button'
import React from 'react'

const ArticleUploadBtn = () => {
	const { ref, inView } = useInView({
		threshold: 0,
	})

	const actions = useActionCreators(articleActions)
	const page = useAppSelector(selectPage)
	const uploadMoreArticles = () => {
		const newPage = page + 1
		actions.setPage(newPage)
	}

	React.useEffect(() => {
		uploadMoreArticles()
	}, [inView])
	return (
		<>
			{page < 10 && (
				<Button
					ref={ref}
					variant='contained'
					onClick={uploadMoreArticles}
				></Button>
			)}
		</>
	)
}

export default ArticleUploadBtn
