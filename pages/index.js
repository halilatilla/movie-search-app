import Head from 'next/head';
import Search from '../components/search';
import Header from '../components/header';

export default () => (
  <>
    <Head>
      <title>Movie Search</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width,upgrade-insecure-requests" />
      <link rel="icon" type="image/icon" href="/assets/favicon.ico" />
    </Head>
    <Header />
    <Search />

    <style jsx>{`
      :global(body) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol', 'Noto Color Emoji';
        background-color: #181a1b;
      }
    `}</style>
  </>
);
