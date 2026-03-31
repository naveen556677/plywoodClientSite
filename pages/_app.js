import '../styles/globals.scss';
import Layout from '../components/Layout/Layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#0d0d1a" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sri Dhanalakshmi Glass and Plywood" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="Sri Dhanalakshmi Glass and Plywood" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
