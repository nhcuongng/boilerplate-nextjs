import { Container } from '@components/layout';
import styles from '@styles/card.module.scss';
import Link from 'next/link';
import React from 'react';

type TProp = {

};

const Post: React.FC<TProp> = () => (
  <Container>
    <div className={styles.grid}>
      <div className={styles.card}>
        <Link href={`/posts/${1}`}>
          Post 1
        </Link>
      </div>
      <div className={styles.card}>
        <Link href={`/posts/${2}`}>
          Post 2
        </Link>
      </div>
    </div>
  </Container>
);

export default Post;
