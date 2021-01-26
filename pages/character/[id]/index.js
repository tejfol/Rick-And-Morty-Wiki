import Head from "next/head";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";

const defaultEndpoint = "https://rickandmortyapi.com/api/character/";

export async function getServerSideProps({ query }) {
    const { id } = query;
    const res = await fetch(`${defaultEndpoint}${id}`);
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
}

export default function Character({ data }) {
    console.log(data);
    const {
        name,
        image,
        status,
        species,
        type,
        gender,
        location,
        origin,
    } = data;

    return (
        <div className={styles.container}>
            <Head>
                <title>{name}</title>
                <link
                    rel="icon"
                    href="https://img.icons8.com/color/48/000000/rick-sanchez.png"
                />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>{name}</h1>
                <div className={styles.profile}>
                    <div className={styles.profile_image}>
                        <img src={image}></img>
                    </div>
                    <div className={styles.profile_details}>
                        <h2>Character details</h2>
                        <ul>
                            <li>
                                <strong>Name: </strong>
                                {name}
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <strong>Status: </strong>
                                {status}
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <strong>Species: </strong>
                                {species}
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <strong>Type: </strong>
                                {type ? type : "unknown"}
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <strong>Gender: </strong>
                                {gender}
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <strong>Location: </strong>
                                {location?.name}
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <strong>Originally From: </strong>
                                {origin?.name}
                            </li>
                        </ul>
                    </div>
                </div>
                <p className={styles.back}>
                    <Link href="/">
                        <a>Back to All Characters</a>
                    </Link>
                </p>
            </main>
        </div>
    );
}
