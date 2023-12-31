import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import DefaultLayout from './Layouts/DefaultLayout';
const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<DefaultLayout>
				<App />
			</DefaultLayout>
		</BrowserRouter>
	</Provider>
);
