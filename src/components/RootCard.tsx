import { Root } from '../models';
import { getRootCardInfo } from '../helpers/getRootCardInfo';
import styled from 'styled-components';
import React, { useState } from 'react';

const Card = styled.div.attrs({
	tabIndex: 0,
})`
  border-radius: 0.625rem;
`;

const MainInfoKey = styled.h2`
	font-size: var(--text-md);
	font-weight: bold;
	margin-bottom: .25rem;
`;

const SubInfoKey = styled.h3`
	font-size: var(--text-xs);
	font-weight: bold;
	text-transform: uppercase;
	margin-bottom: .25rem;
`;

const InfoValue = styled.p`
	font-size: var(--text-xs);
	margin-bottom: 0;
`;

const InfoPairList = styled.li`
	max-width: 30%;
`;

interface RootCardProps {
	root: Root;
}

const RootCard: React.FC<RootCardProps> = ({ root }) => {
	const [isFavourite, setIsFavourite] = useState<boolean>(false);
	const { info1, info2, info3, info4, info5 } = getRootCardInfo(root);

	return (
		<Card className="frost frost--has-hover brand-border p-4 transition pointer text-capitalize">
			<div className="d-flex justify-content-between mb-4">
				<div>
					<MainInfoKey>{info1}</MainInfoKey>
					<InfoValue>{info2}</InfoValue>
				</div>
				<button
					className="align-self-start flex-shrink-0 bg-transparent border-0 p-1 text-reset"
					onClick={() => setIsFavourite(!isFavourite)}
					title="Add to Favourites"
				>{ isFavourite ? '★' : '☆'}</button>
			</div>
			<ul className="list-unstyled d-flex justify-content-between align-items-end text-center mb-0">
				<InfoPairList>
					<SubInfoKey>{info3.key}</SubInfoKey>
					<InfoValue>{info3.value}</InfoValue>
				</InfoPairList>
				<InfoPairList>
					<SubInfoKey>{info4.key}</SubInfoKey>
					<InfoValue>{info4.value}</InfoValue>
				</InfoPairList>
				<InfoPairList>
					<SubInfoKey>{info5.key}</SubInfoKey>
					<InfoValue>{info5.value}</InfoValue>
				</InfoPairList>
			</ul>
		</Card>
	);
};

export default RootCard;
