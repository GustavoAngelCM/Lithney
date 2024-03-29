import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel='manifest' href='/manifest.json' />
					<link rel='icon' href='/lith1-modified.ico' />
					<link rel='apple-touch-icon' href='/background.jpg' />
					<meta name='application-name' content='Lith App' />
					<meta name='description' content='Lithney App' />
					<meta name='theme-color' content='#ff4d00' />
				</Head>
				<body>
					<Main />
					<NextScript />

				</body>
			</Html>
		);
	}
}

export default MyDocument;
