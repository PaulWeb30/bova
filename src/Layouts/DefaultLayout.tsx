import React, { FC } from 'react'
import Header from '../components/Header'
const DefaultLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	)
}

export default DefaultLayout
