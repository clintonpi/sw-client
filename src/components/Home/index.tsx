import { Link } from 'react-router-dom';
import Loader from '../Loader';
import RootPane from '../RootPane';
import classnames from 'classnames';
import { fetchRoots } from '../../redux/actions/rootsActions';
import sentenceCase from 'sentence-case';
import { AppState, FAVOURITES, RootsState } from '../../models';
import {
	Container,
	NavItem,
	TabContent,
	TabPane,
} from 'reactstrap';
import { Logo, NavButton, StyledNav } from './Styles';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
					(() => {
						if (roots.payload) {
							return (
								<>
									<StyledNav className="frost mb-3"
										tabs
									>
										{
											keys.map(k => (
												<NavItem key={k}>
													<NavButton
														className={classnames({ active: tab === k }, 'transition')}
														data-testid={`root-btn-${k}`}
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
							);
						}

						if (roots.error) return <p className="text-center text-highlight">{roots.error.toString()}</p>;

						return <Loader />;
					})()
				}
			</div>
		</div>
	);
};

export default Home;
