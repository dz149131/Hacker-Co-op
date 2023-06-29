document.getElementById('messageForm').addEventListener('submit', (event) => {
	event.preventDefault();
	const messageInput = document.getElementById('messageInput').value;

	fetch('/sendMessage', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ message: messageInput }),
	})
		.then((response) => {
			if (response.ok) {
				console.log('Message sent successfully!');
			} else {
				console.error('Failed to send message.');
			}
		})
		.catch((error) => {
			console.error('An error occurred:', error);
		});
});
