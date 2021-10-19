import { FAVOURITES, Root } from '../models';

export const doFavouriteAction = (root: Root, action: 'ADD' | 'REMOVE') => {
	const currentFavouritesAsString = localStorage.getItem(FAVOURITES);
	const currentFavourites = currentFavouritesAsString ? JSON.parse(currentFavouritesAsString) : {};
	const newFavourites = { ...currentFavourites, [root.url]: root };

	if (action === 'REMOVE') delete newFavourites[root.url];

	localStorage.setItem(FAVOURITES, JSON.stringify(newFavourites));
};
