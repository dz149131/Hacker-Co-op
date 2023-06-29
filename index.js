const axios = require('axios');

const handler = async (req, res) => {
	try {
		const messageInput = req.body.message;

		const endpoint = 'https://www.hackercoop.dev/api/boop';
		const headers = {
			Authorization: 'Bearer ' + process.env.SECRET_KEY,
			'Content-Type': 'application/json',
		};
		const body = { content: 'Message from wholemungbeans: ' + messageInput };

		await axios.post(endpoint, body, { headers });

		console.log('Message sent successfully!');
		res.status(200).send('Message sent successfully!');
	} catch (error) {
		console.error('Failed to send message:', error);
		res.status(500).send('Failed to send message');
	}
};

module.exports = (req, res) => {
	if (req.url === '/api/sendMessage' && req.method === 'POST') {
		return handler(req, res);
	} else {
		res.setHeader('Content-Type', 'text/html');
		res.status(200).sendFile('index.html', { root: __dirname });
	}
};
