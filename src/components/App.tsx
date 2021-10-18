import React from 'react';
import { SwitchProps } from 'react-router';

const App: React.FC<SwitchProps> = ({ children }) => (
	<div className={'App pt-4'}>
		{children}
	</div>
);

export default App;
