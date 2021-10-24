import Home from '.';
import React from 'react';
import { FAVOURITES, Roots } from '../../models';
import { cleanup, fireEvent, render, screen } from '../../testUtils';

jest.mock('../../helpers');
const { getRoots } = require('../../helpers');

getRoots.mockImplementation((): Roots => ({
	films: 'https://swapi.dev/api/films/',
	people: 'https://swapi.dev/api/people/',
	planets: 'https://swapi.dev/api/planets/',
	species: 'https://swapi.dev/api/species/',
	starships: 'https://swapi.dev/api/starships/',
	vehicles: 'https://swapi.dev/api/vehicles/',
}));

beforeEach(() => {
	render(<Home />);
});

test('fetches roots on component render', () => {
	expect(getRoots).toHaveBeenCalledTimes(1);
});

test('renders the root buttons when fetch is successful', async () => {
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
	const rootBtnPeople = screen.getByTestId('root-btn-people');
	const rootPanePeople = screen.getByTestId('root-pane-people');

	expect(rootBtnPeople).toHaveClass('active');
	expect(rootPanePeople).toBeInTheDocument();
});

test('displays a tab pane when its corresponding button is clicked', () => {
	const rootBtnFilms = screen.getByTestId('root-btn-films');

	fireEvent.click(rootBtnFilms);

	const rootPaneFilms = screen.getByTestId('root-pane-films');

	expect(rootBtnFilms).toHaveClass('active');
	expect(rootPaneFilms).toBeInTheDocument();
});

test('successfully saves current tab to localStorage and displays it on rerender', () => {
	let rootBtnPlanets = screen.getByTestId('root-btn-planets');

	fireEvent.click(rootBtnPlanets);

	cleanup();

	render(<Home />);

	rootBtnPlanets = screen.getByTestId('root-btn-planets');

	const rootPanePlanets = screen.getByTestId('root-pane-planets');

	expect(rootBtnPlanets).toHaveClass('active');
	expect(rootPanePlanets).toBeInTheDocument();
});

test('renders Loader component while fetching roots', () => {
	getRoots.mockImplementationOnce(() => null);

	const loader = screen.getByTestId('loader');

	expect(loader).toBeInTheDocument();
});
