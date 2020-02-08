import React from 'react';
import ReactDOM from 'react-dom';

//Import CSS

import css from './styles/style.styl';

//Import Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// Import react Router dependencies

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import * as Sentry from '@sentry/browser';
import Raven from 'raven-js';
import { sentry_url } from './data/config';

Sentry.init({
	dsn: sentry_url,
	beforeSend(event, hint) {
		// Check if it is an exception, and if so, show the report dialog
		if (event.exception) {
			Sentry.showReportDialog({ eventId: event.event_id });
		}
		return event;
	}
});
//Raven.config(sentry_url).install();

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={PhotoGrid}></IndexRoute>
				<Route path="/view/:postId" component={Single}></Route>
			</Route>
		</Router>
	</Provider>
);

ReactDOM.render(router, document.getElementById('root'));
