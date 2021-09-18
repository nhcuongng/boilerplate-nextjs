import { Container } from '@components/layout';
import styles from '@styles/card.module.scss';
import { useRouter } from 'next/router';
import React from 'react';

type TProp = {

};

const Post: React.FC<TProp> = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Container>
      <div className={styles.card}>
        you are see post
        {' '}
        {id}
      </div>
    </Container>
  );
};

export default Post;
