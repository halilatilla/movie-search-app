import Head from 'next/head';
import Search from '../components/search';
import Header from '../components/header';

export default () => (
  <>
    <Head>
      <title>Movie Search</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/icon" href="/assets/favicon.ico" />
    </Head>
    <Header />
    <Search />
  </>
);
