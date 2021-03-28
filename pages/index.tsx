import React from 'react';
import Link from 'next/link';
import { Container } from '@components/layout';
import styles from '@styles/post.module.scss';

/**
 * sấccsacasc
 * @returns
 */
const Home = () => (
  <Container>
    <div className={styles.grid}>
      <div className={styles.card}>
        <Link
          href={{
            pathname: '/about',
            query: { name: 'Cuong' },
          }}
        >
          About us
        </Link>
        <p>Routing with query</p>
      </div>
      <div className={styles.card}>
        <Link
          href="/posts"
        >
          Posts
        </Link>
        <p>Dynamic Routing</p>
      </div>
    </div>
  </Container>
);

export default Home;
