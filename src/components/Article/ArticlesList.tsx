import React, { FC } from 'react'
import { IArticle } from '../../@types/article'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import ArticleItem from './ArticleItem'
import ArticleUploadBtn from './ArticleUploadBtn'

const StyledGrid = styled(Grid)(({ theme }) => ({
	margin: theme.spacing(-1), 
}))

const ArticlesList: FC<{ articles: IArticle[] }> = ({ articles }) => {
	return (
		<StyledGrid container spacing={2}>
			{articles?.map((el, ind) => (
				<Grid item xs={12} sm={6} md={4} lg={4} key={ind}>
					<ArticleItem article={el} />
				</Grid>
			))}

			<Grid item xs={12}>
				<ArticleUploadBtn />
			</Grid>
		</StyledGrid>
	)
}

export default ArticlesList
