import Root from './Root';
import classnames from 'classnames';
import { fetchRoots } from '../redux/actions/rootsActions';
import sentenceCase from 'sentence-case';
import { AppState, RootsState } from '../models';
import {
	Nav,
	NavItem,
	NavLink,
	TabContent,
	TabPane,
} from 'reactstrap';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Home: React.FC = () => {
	const dispatch = useDispatch();
	const [tab, setTab] = useState<string>('people');
	const roots: RootsState = useSelector((state: AppState) => state.roots);

	useEffect(() => {
		dispatch(fetchRoots());
	}, [dispatch]);

	const keys = Object.keys(roots.payload || {});

	keys.push('favourites');

	return (
		<div>
			<h1>{'My little Star Wars app 👾'}</h1>

			{roots.payload && (
				<div className={'mt-3'}>
					<Nav tabs>
						{
							keys.map(k => (
								<NavItem key={k}>
									<NavLink
										className={classnames({ active: tab === k })}
										onClick={() => setTab(k)}
									>
										{sentenceCase(k)}
									</NavLink>
								</NavItem>
							))
						}
					</Nav>

					<TabContent activeTab={tab}>
						{
							keys.map(k => (
								<TabPane
									key={`pane-${k}`}
									tabId={k}
								>
									{tab === k && <Root rootType={k} />}
								</TabPane>
							))
						}
					</TabContent>
				</div>
			)}
		</div>
	);
};

export default Home;
