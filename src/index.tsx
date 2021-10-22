import App from './components/App';
import { GlobalStyle } from './GlobalStyle';
import Home from './components/Home';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
// Using HashRouter instead of BrowserRouter because gh-pages
import 'bootstrap/dist/css/bootstrap.min.css';

const routes = (
	<Provider store={store}>
		<Router>
			<GlobalStyle />
			<App>
				<Switch>
					<Route
						component={Home}
						exact
						path={'/'}
					/>
				</Switch>
			</App>
		</Router>
	</Provider>
);

ReactDOM.render(routes, document.getElementById('root'));
