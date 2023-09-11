import React, { FC } from 'react'
import { IArticle } from '../../@types/article'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

const StyledCard = styled(Card)(({ theme }) => ({
	maxWidth: 400,
	margin: '16px',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
}))

const ArticleItem: FC<{ article: IArticle }> = ({ article }) => {
	return (
		<StyledCard>
			<CardHeader
				title={article?.title ?? 'Title'}
				subheader={'Author: ' + article?.source?.name}
			/>
			<CardMedia
				component='img'
				height='200'
				image={article?.image ?? 'https://via.placeholder.com/400x200'}
				alt={article?.title ?? 'Title'}
			/>
			<CardContent>
				<Typography variant='body2' color='textSecondary' component='p'>
					{article?.description ?? 'Description'}
				</Typography>
			</CardContent>
		</StyledCard>
	)
}

export default ArticleItem
