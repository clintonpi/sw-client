import Home from '.';
import React from 'react';
import { getRoots } from '../../helpers';
import { mockRoots } from '../../mockData';
import { FAVOURITES, Roots } from '../../models';
import { cleanup, fireEvent, render, screen } from '../../testUtils';

jest.mock('../../helpers');

const mockGetRoots: any = getRoots;
// The line above should be: const mockGetRoots = getRoots as jest.MockedFunction<typeof getRoots>;
// but babel-eslint does not recognise the "as" syntax. Several other issues arise when the eslint parser
// is changed to @typescript-eslint/parser due to the current version of some dependencies.

const mockGetRootsResolveOnce = () => mockGetRoots.mockResolvedValueOnce(mockRoots);

const mockGetRootsRejectOnce = () => mockGetRoots.mockRejectedValueOnce(null);

test('fetches roots on component render', () => {
	mockGetRootsResolveOnce();
	render(<Home />);

	expect(mockGetRoots).toHaveBeenCalledTimes(1);
});

test('renders the root buttons when fetch is successful', async () => {
	mockGetRootsResolveOnce();
	render(<Home />);

	mockGetRootsResolveOnce();
	const rootsResponse: Roots = await getRoots();
	const rootTypes: string[] = Object.keys(rootsResponse);

	rootTypes.push(FAVOURITES);

	const rootBtns = screen.getAllByTestId(/root-btn/i);

	rootBtns.forEach((rootBtn, index) => {
		expect(rootBtn).toBeInTheDocument();
		expect(rootBtn).toHaveTextContent(new RegExp(rootTypes[index], 'i'));
	});
});

test('displays the "People" tab by default', () => {
	mockGetRootsResolveOnce();
	render(<Home />);

	const rootBtnPeople = screen.getByTestId('root-btn-people');
	const rootPanePeople = screen.getByTestId('root-pane-people');

	expect(rootBtnPeople).toHaveClass('active');
	expect(rootPanePeople).toBeInTheDocument();
});

test('displays a tab pane when its corresponding button is clicked', () => {
	mockGetRootsResolveOnce();
	render(<Home />);

	const rootBtnFilms = screen.getByTestId('root-btn-films');

	fireEvent.click(rootBtnFilms);

	const rootPaneFilms = screen.getByTestId('root-pane-films');

	expect(rootBtnFilms).toHaveClass('active');
	expect(rootPaneFilms).toBeInTheDocument();
});

test('saves current tab to localStorage and displays it on rerender', () => {
	mockGetRootsResolveOnce();
	render(<Home />);

	let rootBtnPlanets = screen.getByTestId('root-btn-planets');

	fireEvent.click(rootBtnPlanets);

	cleanup();

	mockGetRootsResolveOnce();
	render(<Home />);

	rootBtnPlanets = screen.getByTestId('root-btn-planets');

	const rootPanePlanets = screen.getByTestId('root-pane-planets');

	expect(rootBtnPlanets).toHaveClass('active');
	expect(rootPanePlanets).toBeInTheDocument();
});

test('renders Loader component while fetching roots', () => {
	mockGetRoots.mockImplementationOnce();
	render(<Home />);

	const loader = screen.getByTestId('loader');
	const rootsContainer = screen.queryByTestId('roots-container');

	expect(loader).toBeInTheDocument();
	expect(rootsContainer).not.toBeInTheDocument();
});

test('renders error message when fetch is unsuccessful', async () => {
	mockGetRootsRejectOnce();
	render(<Home />);

	const errorMessage = await screen.findByTestId('error');

	expect(errorMessage).toBeInTheDocument();
});
