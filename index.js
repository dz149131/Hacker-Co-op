const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.post('/sendMessage', async (req, res) => {
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
		res.sendStatus(200);
	} catch (error) {
		console.error('Failed to send message:', error);
		res.sendStatus(500);
	}
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
