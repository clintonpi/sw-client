import { fetchRoot } from '../redux/actions/rootActions';
import { AppState, RootState } from '../models';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface RootProps {
  rootType: string;
}

const Root: React.FC<RootProps> = ({ rootType }) => {
	const dispatch = useDispatch();
	const root: RootState = useSelector((state: AppState) => state.root);

	useEffect(() => {
		if (rootType !== 'favourites') dispatch(fetchRoot(rootType));
	}, [dispatch, rootType]);

	return (
		<div>{root && root.payload && JSON.stringify(root.payload)}</div>
	);
};

export default Root;
