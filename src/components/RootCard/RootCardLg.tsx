import { Root } from '../../models';
import { getRootCardInfo } from '../../helpers';
import {
	InfoPairListItem,
	InfoValueLg,
	MainInfoKeyLg,
	RootCardHeaderBtn,
	RootCardLgHeader,
	RootCardLgList,
	RootCardLgWrap,
	SubInfoKeyLg,
} from './Styles';
import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';

interface RootCardLgProps {
	cardToFocus: EventTarget | null;
	root: Root;
	setCurrentRootCard: Dispatch<SetStateAction<Root | null>>;
}

const RootCardLg: React.FC<RootCardLgProps> = ({ cardToFocus, root, setCurrentRootCard }) => {
	const { info1, info2, info3, info4, info5, info6, info7, info8 } = getRootCardInfo(root);
	const cardLgToFocus = useRef<any>(RootCardLgWrap);

	const handleCardClose = () => {
		setCurrentRootCard(null);
		// @ts-ignore
		cardToFocus.focus();
		// Ignoring because cardToFocus returns a literal HTML tag
		// which, in and of itself, does not have a "focus" property.
	};

	useEffect(() => {
		// @ts-ignore
		cardLgToFocus.current.focus();
	});

	return (
		<RootCardLgWrap
			className="frost brand-border rounded-md p-4 text-capitalize"
			ref={cardLgToFocus}
			tabIndex={0}
		>
			<RootCardLgHeader>
				<div>
					<MainInfoKeyLg>{info1}</MainInfoKeyLg>
					<InfoValueLg>{info2}</InfoValueLg>
				</div>
				<RootCardHeaderBtn
					className="text-2xl"
					onClick={handleCardClose}
					title="Close"
				>
					{ '×' }
				</RootCardHeaderBtn>
			</RootCardLgHeader>
			<RootCardLgList>
				<InfoPairListItem>
					<SubInfoKeyLg>{info3.key}</SubInfoKeyLg>
					<InfoValueLg>{info3.value}</InfoValueLg>
				</InfoPairListItem>
				<InfoPairListItem>
					<SubInfoKeyLg>{info4.key}</SubInfoKeyLg>
					<InfoValueLg>{info4.value}</InfoValueLg>
				</InfoPairListItem>
				<InfoPairListItem>
					<SubInfoKeyLg>{info5.key}</SubInfoKeyLg>
					<InfoValueLg>{info5.value}</InfoValueLg>
				</InfoPairListItem>
			</RootCardLgList>
			<RootCardLgList>
				<InfoPairListItem>
					<SubInfoKeyLg>{info6.key}</SubInfoKeyLg>
					<InfoValueLg>{info6.value}</InfoValueLg>
				</InfoPairListItem>
				<InfoPairListItem>
					<SubInfoKeyLg>{info7.key}</SubInfoKeyLg>
					<InfoValueLg>{info7.value}</InfoValueLg>
				</InfoPairListItem>
				<InfoPairListItem>
					<SubInfoKeyLg>{info8.key}</SubInfoKeyLg>
					<InfoValueLg>{info8.value}</InfoValueLg>
				</InfoPairListItem>
			</RootCardLgList>
		</RootCardLgWrap>
	);
};

export default RootCardLg;
