import Head from 'next/head';
import EmptyState from 'components/EmptyState/EmptyState';
import Navbar from 'components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import { colors, fonts } from 'styles/globals';
import { INITIAL_DATA } from 'Mocks/botsardo';
import Botsardo from 'CustomTypes/botsardo.d';

interface AppState {
    botsardos: Array<Botsardo>;
    loading: boolean;
}

export default function Home() {
    const [botsardos, setBotsardos] = useState<AppState['botsardos']>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setBotsardos(INITIAL_DATA);
            setLoading(false);
        }, 2000);
        //simula llamada a api
    }, []);

    return (
        <div>
            <Head>
                <title>Botsardo</title>
                <meta name="description" content="A grid trading bot" />
                <link rel="icon" href="/botsardo.ico" />
            </Head>
            <Navbar></Navbar>
            <main>
                {loading ? (
                    <div className="loading">CARGANDO</div>
                ) : !botsardos.length ? (
                    <h1>hay bots</h1>
                ) : (
                    <EmptyState />
                )}
            </main>
            <style jsx global>{`
                body {
                    background: rgba(32, 59, 100, 0.95);
                    font-family: ${fonts.lato};
                    color: ${colors.white};
                    margin: 0;
                    padding: 0;
                }

                div {
                    position: relative;
                }

                main {
                    height: 100vh;
                    width: 100%;
                }

                .loading {
                    display: flex;
                    justify-content: center;
                }
            `}</style>
        </div>
    );
}
