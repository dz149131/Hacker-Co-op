import Link from 'next/link';

export default function Home() {
	return (
		<main className="flex justify-center items-center min-h-screen">
			<div className="container mx-auto flex flex-col items-center">
				<h1 className="text-3xl font-medium border-b border-gray-400 mb-3 pb-1 text-white inline-block w-96">HOMEWORK</h1>

				<form className="flex flex-col items-center" id="messageForm">
					<input
						className="w-96 px-3 py-2 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-500"
						type="text"
						id="messageInput"
						placeholder="Enter a message..."
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
			</div>
		</main>
	);
}
