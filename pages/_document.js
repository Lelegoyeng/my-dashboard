import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <title>BOT Dashboard</title>
                    <meta name="description" content="Ini adalah aplikasi Next.js saya" />
                    <link rel="stylesheet" href="/path/ke/external.css" />
                    <link rel="icon" href="/ferox-transparent.ico" />
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
