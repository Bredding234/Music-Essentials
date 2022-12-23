import { getAuthToken } from './getAuthToken';

export const getArtistId = async searchValue => {
	const authToken = await getAuthToken();
	const response = await fetch(
		`https://api.spotify.com/v1/search?q=${searchValue}&type=artist`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${authToken.access_token}`,
			},
		},
	);

	const data = await response.json();
	return data.artists.items[0].id;
};
