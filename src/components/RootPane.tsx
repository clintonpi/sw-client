import Loader from './Loader';
import RootCard from './RootCard';
import { fetchRoot } from '../redux/actions/rootActions';
import styled from 'styled-components';
import { AppState, Root, RootState } from '../models';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RootPaneGrid = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	
	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
	}
`;

interface RootProps {
  rootType: string;
}

const RootPane: React.FC<RootProps> = ({ rootType }) => {
	const dispatch = useDispatch();
	const root: RootState = useSelector((state: AppState) => state.root);

	useEffect(() => {
		if (rootType !== 'favourites') dispatch(fetchRoot(rootType));
	}, [dispatch, rootType]);

	return (
		<>
			{
				root && root.payload ? (
					<RootPaneGrid>
						{
							root.payload.results.map((result: Root) => (
								<RootCard key={result.url}
									root={result}
								/>
							))
						}
					</RootPaneGrid>
				) : (
					<Loader />
				)
			}
		</>
	);
};

export default RootPane;
