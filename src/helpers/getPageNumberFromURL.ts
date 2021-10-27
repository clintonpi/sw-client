export const getPageNumberFromURL = (URL: string): number => parseInt(URL.split('page=')[1], 10) || 0;
