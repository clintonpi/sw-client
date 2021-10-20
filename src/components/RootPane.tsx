import Loader from './Loader';
import RootCard from './RootCard/RootCard';
import RootCardLg from './RootCard/RootCardLg';
import styled from 'styled-components';
import { AppState, FAVOURITES, Root, RootState } from '../models';
import React, { useEffect, useState } from 'react';
import { fetchRoot, fetchRootSuccess } from '../redux/actions/rootActions';
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
	const [currentRootCard, setCurrentRootCard] = useState<Root | null>(null);
	const [cardToFocus, setCardToFocus] = useState<EventTarget | null>(null);

	useEffect(() => {
		if (rootType === FAVOURITES) {
			const favouritesPayLoadWithRootAsString = localStorage.getItem(FAVOURITES);
			const favouritesPayLoadWithRoot = favouritesPayLoadWithRootAsString ? JSON.parse(
				favouritesPayLoadWithRootAsString
			) : {};
			const favouritesRoots: Root[] = Object.values(favouritesPayLoadWithRoot);

			dispatch(fetchRootSuccess({
				count: 0,
				next: null,
				previous: null,
				results: favouritesRoots,
			}));
		}	else {
			dispatch(fetchRoot(rootType));
		}
	}, [dispatch, rootType]);

	return (() => {
		if (root && root.payload && root.payload.results.length) {
			return (
				<div className="position-relative">
					<RootPaneGrid>
						{
							root.payload.results.map((result: Root) => (
								<RootCard
									key={result.url}
									root={result}
									rootType={rootType}
									setCardToFocus={setCardToFocus}
									setCurrentRootCard={setCurrentRootCard}
								/>
							))
						}
					</RootPaneGrid>
					{
						currentRootCard && (
							<RootCardLg
								cardToFocus={cardToFocus}
								root={currentRootCard}
								setCurrentRootCard={setCurrentRootCard}
							/>
						)
					}
				</div>
			);
		} else if (root && root.payload) {
			return <p className="text-center">{'You will find only what you bring in.'}</p>;
		}

		return <Loader />;
	})();
};

export default RootPane;
