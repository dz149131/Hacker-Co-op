'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
	const [message, setMessage] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const endpoint = 'https://www.hackercoop.dev/api/boop';
			const headers = {
				Authorization: SECRET_KEY,
				'Content-Type': 'application/json',
			};
			const body = { content: 'Message from wholemungbeans: ' + message };

			await axios.post(endpoint, body, { headers });

			console.log('Message sent successfully!');
			setMessage('');
		} catch (error) {
			console.error('Failed to send message:', error);
		}
	};

	const handleChange = (e) => {
		setMessage(e.target.value);
	};
	return (
		<main className="flex justify-center items-center min-h-screen">
			<div className="container mx-auto flex flex-col items-center">
				<h1 className="text-3xl font-medium border-b border-gray-400 mb-3 pb-1 text-white inline-block w-96">HOMEWORK</h1>
				<form className="flex flex-col items-center" id="messageForm" onSubmit={handleSubmit}>
					<input
						className="w-96 px-3 py-2 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-500"
						type="text"
						id="messageInput"
						placeholder="Enter a message..."
						value={message}
						onChange={handleChange}
					></input>

					<button
						className="my-3 py-1.5 px-4 w-full max-w-xs transition-colors bg-gray-50 border active:bg-blue-800 font-medium border-gray-200 hover:text-white text-blue-600 hover:border-blue-700 rounded-lg hover:bg-blue-600 disabled:opacity-50"
						type="submit"
					>
						Send Message
					</button>
				</form>
				<Link className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="/new">
					New Page
				</Link>
				<Image
					src="/images/gfx100s_sample_04_thum-1.jpg" // Route of the image file
					height={300} // Desired size with correct aspect ratio
					width={300} // Desired size with correct aspect ratio
					alt="Your Name"
				></Image>
			</div>
		</main>
	);
}
