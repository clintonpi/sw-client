import App from './components/App';
import Home from './components/Home';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import mainBG from './images/gray-and-black-galaxy.jpeg';
import store from './redux/store';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
// Using HashRouter instead of BrowserRouter because gh-pages
import 'bootstrap/dist/css/bootstrap.min.css';

const GlobalStyle = createGlobalStyle`
	:root {
		--text-scale-difference: 0.125rem;
		--text-2xs: 0.625rem;
		--text-xs: calc(var(--text-2xs) + var(--text-scale-difference));
		--text-sm: calc(var(--text-xs) + var(--text-scale-difference));
		--text-base: calc(var(--text-sm) + var(--text-scale-difference));
		--text-md: calc(var(--text-base) + var(--text-scale-difference));
		--text-lg: calc(var(--text-md) + var(--text-scale-difference));
		--text-xl: calc(var(--text-lg) + var(--text-scale-difference));
		--text-2xl: calc(var(--text-xl) + var(--text-scale-difference));
		--brand-border: 1px solid rgba(255, 255, 255, .5);
		--rounded-md: 0.625rem;
		--glass: rgba(0, 0, 0, .3);
		--glass--md: rgba(0, 0, 0, .5);
		--timing-base: .3s;
	}

	:focus:not(:focus-visible) {
		outline: 0;
	}

	body {
		margin: 0;
		padding: 0;
		background-color: #000000 !important;
		background-image: url(${mainBG});
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
		color: rgba(255, 255, 255, .8) !important;
		font-family: 'Noto Sans Display', sans-serif !important;
		word-break: break-word;
	}

	.text-2xs {
		font-size: var(--text-2xs);
	}

	.text-xs {
		font-size: var(--text-xs);
	}

	.text-sm {
		font-size: var(--text-sm);
	}

	.text-base {
		font-size: var(--text-base);
	}

	.text-md {
		font-size: var(--text-md);
	}

	.text-lg {
		font-size: var(--text-lg);
	}

	.text-xl {
		font-size: var(--text-xl);
	}

	.text-2xl {
		font-size: var(--text-2xl);
	}

	.text-highlight {
		color: rgba(255, 255, 255, .9);
		text-shadow: 0 0 2px #000000;
	}

	.brand-border {
		border: var(--brand-border);
	}

	.rounded-md {
		border-radius: var(--rounded-md);
	}

	.frost {
		backdrop-filter: blur(5px);
		background-color: var(--glass);
	}

	.frost--has-hover:hover {
		backdrop-filter: blur(10px);
		background-color: var(--glass--md);
	}

	.transition {
		transition: var(--timing-base);
	}

	.pointer {
		cursor: pointer;
	}
`;

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
