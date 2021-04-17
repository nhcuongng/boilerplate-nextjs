import CardStyle from '@styles/post.module.scss';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import styles from './container.module.scss';

type TProp = {

};

export const Container: React.FC<TProp> = ({ children }) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/a076d05399.js" crossOrigin="anonymous" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Todo App
        </h1>

        <p className={styles.description}>
          Boilerplate code next js
        </p>
        {children}
        {router.pathname !== '/' && (
          <div className={CardStyle.card}>
            <Link
              href="/"
            >
              Back to home
            </Link>
          </div>
        )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          {' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
};
