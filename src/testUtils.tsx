import { HashRouter as Router } from 'react-router-dom';
import store from './redux/store';
import { Omit, Provider } from 'react-redux';
import React, { ReactElement } from 'react';
import { RenderOptions, render } from '@testing-library/react';
// Using HashRouter instead of BrowserRouter because gh-pages

const IndexComponent: React.FC = ({ children }) => (
	<Provider store={store}>
		<Router>
			{ children }
		</Router>
	</Provider>
);

const customRender = (
	component: ReactElement,
	options?: Omit<RenderOptions, 'wrapper'>
) => render(component, { wrapper: IndexComponent, ...options });

export * from '@testing-library/react';
export { customRender as render };
