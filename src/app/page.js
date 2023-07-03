'use client';
import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
	const [message, setMessage] = useState('');
	const [sending, setSending] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const [buttonText, setButtonText] = useState('Send Message');

	const resetState = () => {
		setSending(false);
		setSuccess(false);
		setError(false);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		resetState();
		toast.info('Sending message...', {
			position: toast.POSITION.TOP_RIGHT,
		});

		try {
			const endpoint = 'https://www.hackercoop.dev/api/boop';
			const headers = {
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_SECRET_KEY}`,
				'Content-Type': 'application/json',
			};
			const body = { content: 'Message from wholemungbeans: ' + message };

			await axios.post(endpoint, body, { headers });

			console.log('Message sent successfully!');
			setMessage('');
			setSuccess(true);
			setButtonText('Message Sent Successfully');
			toast.success('Message sent successfully!', {
				position: toast.POSITION.TOP_RIGHT,
			});
		} catch (error) {
			console.error('Failed to send message:', error);
			setError(true);
			setButtonText('Failed To Send');
			toast.error('Failed to send message!', {
				position: toast.POSITION.TOP_RIGHT,
			});
		} finally {
			setSending(false);
			setTimeout(() => {
				setButtonText('Send Message');
			}, 2000);
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
						disabled={message.trim() === ''}
					>
						{buttonText}
					</button>
				</form>
				<Link
					className="block max-w-sm p-3 my-1 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
					href="https://github.com/dz149131"
				>
					Github
				</Link>
				<Link
					className="block max-w-sm p-3 my-1 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
					href="https://www.linkedin.com/in/da-nny-zhang/"
				>
					Linkedin
				</Link>
				<ToastContainer />
			</div>
		</main>
	);
}
