import React from 'react';
import { NotFoundPage, ArticlesPage } from './pages';
import { Routes, Route } from 'react-router-dom';


function App() {

	return (
		<Routes>
			<Route path="/" element={<ArticlesPage />} />
			<Route path={'*'} element={<NotFoundPage />} />
		</Routes>
	);
}

export default App;
