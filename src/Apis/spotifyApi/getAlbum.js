import { getAuthToken } from './getAuthToken';

export const getAlbums = async artistId => {
	const authToken = await getAuthToken();

	const response = await fetch(
		`https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album&market=US&limit=50`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${authToken.access_token}`,
			},
		},
	);

	const albums = await response.json();
	return albums;
};
