import type { NextPage } from 'next';
import Head from 'next/head';
import EmptyState from 'components/EmptyState';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Botsardo</title>
                <meta name="description" content="A grid trading bot" />
                <link rel="icon" href="/botsardo.ico" />
            </Head>
            <main>
                <EmptyState></EmptyState>
            </main>
            <style jsx global>{`
                body {
                    background: rgba(32, 59, 100, 0.95);
                }
            `}</style>
        </div>
    );
};

export default Home;
