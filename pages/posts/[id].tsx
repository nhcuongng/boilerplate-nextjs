import React from 'react';
import { useRouter } from 'next/router';
import { Container } from '@components/layout';
import styles from '@styles/post.module.scss';

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
