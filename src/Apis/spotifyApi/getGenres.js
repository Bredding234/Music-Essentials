import { getAuthToken } from './getAuthToken';

export const getGenres = async () => {
	const authToken = await getAuthToken();

	const response = await fetch(
		`https://api.spotify.com/v1/recommendations/available-genre-seeds`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${authToken.access_token}`,
			},
		},
	);
	const genres = await response.json();
	return genres;
};
