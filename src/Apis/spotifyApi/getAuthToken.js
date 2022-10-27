export const getAuthToken = async () => {
	const clientId = import.meta.env.VITE_CLIENT_ID;
	const clientSec = import.meta.env.VITE_CLIENT_SECRET;

	const authParameters = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSec}`,
	};

	const response = await fetch(
		'https://accounts.spotify.com/api/token',
		authParameters,
	);
	return response.json();
};
