import Loader from '../Loader';
import RootCard from '../RootCard';
import RootCardLg from '../RootCard/RootCardLg';
import { RootPaneGrid } from './Styles';
import { AppState, FAVOURITES, Root, RootState } from '../../models';
import React, { useEffect, useState } from 'react';
import { fetchRoot, fetchRootSuccess } from '../../redux/actions/rootActions';
import { useDispatch, useSelector } from 'react-redux';

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
		if (root.payload) {
			if (root.payload.results.length) {
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
			}

			return <p className="text-center text-highlight">{'You will find only what you bring in.'}</p>;
		}

		if (root.error) return <p className="text-center text-highlight">{root.error.toString()}</p>;

		return <Loader />;
	})();
};

export default RootPane;
