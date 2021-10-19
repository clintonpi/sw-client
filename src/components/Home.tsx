import { Link } from 'react-router-dom';
import Loader from './Loader';
import RootPane from './RootPane';
import classnames from 'classnames';
import { fetchRoots } from '../redux/actions/rootsActions';
import logo from '../images/logo.png';
import sentenceCase from 'sentence-case';
import styled from 'styled-components';
import { AppState, FAVOURITES, RootsState } from '../models';
import {
	Container,
	Nav,
	NavItem,
	TabContent,
	TabPane,
} from 'reactstrap';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Logo = styled.img.attrs({
	src: logo,
	alt: 'Star Wars',
})`
	width: 12.6875rem;
`;

const StyledNav = styled(Nav)`
	border-top: var(--brand-border) !important;
	border-bottom: var(--brand-border) !important;
	justify-content: center;
`;

const NavButton = styled.button`
	background-color: transparent;
	border: 1px solid transparent;
	padding: .75rem 1rem;
	color: inherit;
	text-shadow: inherit;
	text-transform: uppercase;

	&:hover {
		background-color: var(--glass--md);
	}

	&.active {
		border-left: var(--brand-border);
		border-right: var(--brand-border);
	}
`;

const Home: React.FC = () => {
	const dispatch = useDispatch();
	const [tab, setTab] = useState<string>(localStorage.getItem('tab') || 'people');
	const roots: RootsState = useSelector((state: AppState) => state.roots);
	const keys = Object.keys(roots.payload || {});

	keys.push(FAVOURITES);

	useEffect(() => {
		dispatch(fetchRoots());
	}, [dispatch]);

	const handleTab = (tab: string) => {
		setTab(tab);
		localStorage.setItem('tab', tab);
	};

	return (
		<div>
			<h1 className="text-center">
				<Link to="/">
					<Logo />
				</Link>
			</h1>

			<div className={'my-4'}>
				{
					roots.payload ? (
					<>
						<StyledNav className="frost mb-3"
							tabs
						>
							{
								keys.map(k => (
									<NavItem key={k}>
										<NavButton
											className={classnames({ active: tab === k }, 'transition')}
											onClick={() => handleTab(k)}
										>
											{sentenceCase(k)}
										</NavButton>
									</NavItem>
								))
							}
						</StyledNav><TabContent activeTab={tab}>
							{
								keys.map(k => (
									<TabPane
										key={`pane-${k}`}
										tabId={k}
									>
										<Container>
											{tab === k && <RootPane rootType={k} />}
										</Container>
									</TabPane>
								))
							}
						</TabContent>
					</>
					) : (
						<Loader />
					)
				}
			</div>
		</div>
	);
};

export default Home;
