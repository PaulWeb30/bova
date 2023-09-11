import * as React from 'react'
import { useNavigate } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import { fetchArticlesThunk } from '../../redux/slices/article'
import useDebounce from '../../hooks/useDebounce'
import { useAppDispatch } from '../../redux/hooks'

import { SearchArticleInput } from '../UI'

export default function SearchAppBar() {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const [inputValue, setInputValue] = React.useState<string>('example')

	const debouncedValue = useDebounce(inputValue, 300)

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value)
	}

	React.useEffect(() => {
		dispatch(fetchArticlesThunk(debouncedValue))
		navigate(`?search=${debouncedValue}`)
	}, [debouncedValue])

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<Typography
						variant='h6'
						noWrap
						component='div'
						sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
					>
						BOVO
					</Typography>
					<SearchArticleInput
						inputValue={inputValue}
						handleInputChange={handleInputChange}
					/>
				</Toolbar>
			</AppBar>
		</Box>
	)
}
