import { getAuthToken } from './getAuthToken';

// get Album track
export const getAlbumTracks = async albumId => {
	const authToken = await getAuthToken();

	const response = await fetch(
		`https://api.spotify.com/v1/albums/${albumId}/tracks`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${authToken.access_token}`,
			},
		},
	);

	const data = await response.json();
	return data;
};
