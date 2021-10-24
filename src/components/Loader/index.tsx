import { Circle } from './Styles';
import React from 'react';

const Loader: React.FC = () => (
	<div data-testid="loader">
		<Circle />
		<p className="text-center text-highlight mt-2">{'Patience you must have, my young Padawan'}</p>
	</div>
);

export default Loader;
