import { getRoot } from '../api';
import React, { MutableRefObject, useEffect, useRef, useState } from 'react';

interface RootProps {
  type: string;
}

const Root: React.FC<RootProps> = ({ type }) => {
	const [rootData, setRootData] = useState< | null>(null);
	const isMounted: MutableRefObject<boolean> = useRef(false);

	useEffect(() => {
		isMounted.current = true;

		return () => {
			isMounted.current = false;
		};
	}, []);

	useEffect(() => {
		if (type !== 'favourites') {
			(async () => {
				const rootData = await getRoot(type);

				if (isMounted.current) setRootData(rootData);
			})();
		}
	}, [type]);

	return (
		<div>{JSON.stringify(rootData)}</div>
	);
};

export default Root;
