import { doFavouriteAction } from '../../helpers/doFavouriteAction';
import { fetchRootSuccess } from '../../redux/actions/rootActions';
import { getRootCardInfo } from '../../helpers/getRootCardInfo';
import { useDispatch } from 'react-redux';
import { FAVOURITES, Root } from '../../models';
import {
	InfoPairListItem, InfoValue, MainInfoKey, RootCardHeader, RootCardHeaderBtn, RootCardList, SubInfoKey,
} from './Styles';
import React, {
	Dispatch, KeyboardEvent, MouseEvent, SetStateAction, useEffect, useState,
} from 'react';

interface RootCardProps {
	root: Root;
	rootType: string;
	setCardToFocus: Dispatch<SetStateAction<EventTarget | null>>;
	setCurrentRootCard: Dispatch<SetStateAction<Root | null>>;
}

const RootCard: React.FC<RootCardProps> = ({ root, rootType, setCardToFocus, setCurrentRootCard }) => {
	const [isFavourite, setIsFavourite] = useState<boolean>(false);
	const { info1, info2, info3, info4, info5 } = getRootCardInfo(root);
	const favouritesAsString = localStorage.getItem(FAVOURITES);
	const favourites = favouritesAsString ? JSON.parse(favouritesAsString) : {};
	const dispatch = useDispatch();

	const handleViewCard = (e: MouseEvent | KeyboardEvent) => {
		setCurrentRootCard(root);
		setCardToFocus(e.target);
	};

	const handleFavourite = (e: MouseEvent) => {
		e.stopPropagation();

		const actionType = isFavourite ? 'REMOVE' : 'ADD';

		doFavouriteAction(root, actionType);
		setIsFavourite(!isFavourite);

		if (actionType === 'REMOVE' && rootType === FAVOURITES) {
			delete favourites[root.url];
			const favouritesRoots: Root[] = Object.values(favourites);

			dispatch(fetchRootSuccess({
				count: 0,
				next: null,
				previous: null,
				results: favouritesRoots,
			}));
		}
	};

	useEffect(() => {
		if (favourites[root.url]) setIsFavourite(true);
	}, [favourites, root.url]);

	return (
		<div className="frost frost--has-hover brand-border rounded-md p-4 transition pointer text-capitalize"
			onClick={handleViewCard}
			onKeyDown={e => e.key === 'Enter' && handleViewCard(e)} // The Favourite button stops propagation of this event
			tabIndex={0}
		>
			<RootCardHeader>
				<div>
					<MainInfoKey>{info1}</MainInfoKey>
					<InfoValue>{info2}</InfoValue>
				</div>
				<RootCardHeaderBtn
					onClick={handleFavourite}
					onKeyDown={e => e.stopPropagation()} // Because this event triggers that of the parent element
					title="Add to Favourites"
				>
					{ isFavourite ? '★' : '☆'}
				</RootCardHeaderBtn>
			</RootCardHeader>
			<RootCardList>
				<InfoPairListItem>
					<SubInfoKey>{info3.key}</SubInfoKey>
					<InfoValue>{info3.value}</InfoValue>
				</InfoPairListItem>
				<InfoPairListItem>
					<SubInfoKey>{info4.key}</SubInfoKey>
					<InfoValue>{info4.value}</InfoValue>
				</InfoPairListItem>
				<InfoPairListItem>
					<SubInfoKey>{info5.key}</SubInfoKey>
					<InfoValue>{info5.value}</InfoValue>
				</InfoPairListItem>
			</RootCardList>
		</div>
	);
};

export default RootCard;
