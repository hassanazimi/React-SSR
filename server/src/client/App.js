import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import { fetchCurrentUser } from './actions';

const App = ({ route }) => {
	return (
		<React.Fragment>
			<Header />
			{renderRoutes(route.routes)}
		</React.Fragment>
	);
};

export default {
	component: App,
	loadData: ({ dispatch }) => dispatch(fetchCurrentUser()),
};
