import Head from "next/head";
import styles from "../styles/Home.module.css";

const defaultEndpoint = "https://rickandmortyapi.com/api/character/";

export async function getServerSideProps() {
    const res = await fetch(defaultEndpoint);
    const data = await res.json();
    return {
        props: {
            data,
        },
    };
}

export default function Home({ data }) {
    const { results = [] } = data;
    console.log(data);
    return (
        <div className={styles.container}>
            <Head>
                <title>Rick and Morty Wiki</title>
                <link
                    rel="icon"
                    href="https://img.icons8.com/color/48/000000/rick-sanchez.png"
                />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Wubba Lubba Dub Dub!</h1>

                <p className={styles.description}>Rick and Morty Wiki</p>

                <ul className={styles.grid}>
                    {results.map((result) => {
                        const { id, name, image } = result;
                        return (
                            <li key={id} className={styles.card}>
                                <a href="#">
                                    <img src={image} alt={`${name} Thumbnail`}></img>
                                    <h3>{name}</h3>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{" "}
                    <img
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        className={styles.logo}
                    />
                </a>
            </footer>
        </div>
    );
}
