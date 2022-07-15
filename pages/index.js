import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kartavya Gauswami</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Kartavya Gauswami</h1>
        <div className={styles.topics}>
          <div className={styles.triangle}>
            <p>Experience</p>
            <img className={styles.img} src="/exp.svg" />
          </div>
          <div className={styles.triangle}>
            <p>Education</p>
            <img className={styles.img} src="/edu2.png" />
          </div>
          <div className={styles.triangle}>
            <p>Skills</p>
            <img className={styles.img} src="/skills.png" />
          </div>          
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
