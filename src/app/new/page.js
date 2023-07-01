import Head from 'next/head';
import Link from 'next/link';

export default function New() {
	return (
		<>
			<Head>
				<title>NEW PAGE</title>
			</Head>
			<h1>new</h1>
			<h2>
				<Link href="/">← Back to home</Link>
			</h2>
		</>
	);
}
