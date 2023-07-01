//http://localhost:3000/api

export async function GET(request) {
	// Handle GET request for /api
	// Retrieve users from the database or any data source
	const users = [
		{ id: 1, name: 'Bob' },
		{ id: 2, name: 'Bob' },
		{ id: 3, name: 'Bob' },
	];

	// Sends the users a response
	return new Response(JSON.stringify(users));
}
