import React from 'react';
import { SwitchProps } from 'react-router';
import { Container, Navbar, NavbarBrand } from 'reactstrap';

const App: React.FC<SwitchProps> = ({ children }) => (
	<div className={'App'}>
		<Navbar
			color={'light'}
			light
		>
			<NavbarBrand href={'/'}>{'Star Wars Client'}</NavbarBrand>
		</Navbar>

		<Container className={'pt-5'}>
			{children}
		</Container>
	</div>
);

export default App;
