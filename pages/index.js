import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Homepage</title>
        <meta name='description' content='Dodge' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Bitcoin and doge tracker</h1>
        <Link href='/bit/bit'>
          <a>bit!</a>
        </Link>
        <p className={styles.description}></p>
      </main>

      <footer className={styles.footer}>Made by Bram Houben</footer>
    </div>
  );
}
