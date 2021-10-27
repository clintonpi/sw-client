import { PaginationBtn } from './Styles';
import { fetchRoot } from '../../redux/actions/rootActions';
import { getPageNumberFromURL } from '../../helpers';
import { useDispatch } from 'react-redux';
import React, { Dispatch } from 'react';
import { Root, RootState } from '../../models';

interface PaginationBtnsProps {
	root: RootState;
	rootType: string;
	setCurrentRootCard: Dispatch<React.SetStateAction<Root | null>>;
}

const PaginationBtns: React.FC<PaginationBtnsProps> = ({ root, rootType, setCurrentRootCard }) => {
	let prevPage: number = 0;

	let nextPage: number = 0;

	if (root.payload) {
		if (root.payload.previous)
			prevPage = getPageNumberFromURL(root.payload.previous);
		if (root.payload.next)
			nextPage = getPageNumberFromURL(root.payload.next);
	}

	const dispatch = useDispatch();

	const fetchPrevPage = () => {
		dispatch(fetchRoot(`${rootType}/?page=${prevPage}`));
		setCurrentRootCard(null);
	};

	const fetchNextPage = () => {
		dispatch(fetchRoot(`${rootType}/?page=${nextPage}`));
		setCurrentRootCard(null);
	};

	return (
		<div className="d-flex justify-content-center flex-wrap mt-4">
			{
				prevPage !== 0 && (
					<PaginationBtn
						className="frost frost--has-hover"
						onClick={fetchPrevPage}
					>{'Previous'}</PaginationBtn>
				)
			}
			{
				nextPage !== 0 && (
					<PaginationBtn
						className="frost frost--has-hover"
						onClick={fetchNextPage}
					>{'Next'}</PaginationBtn>
				)
			}
		</div>
	);
};

export default PaginationBtns;
