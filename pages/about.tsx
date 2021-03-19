import { Container } from '@components/layout';
import { useRouter } from 'next/router';
import React from 'react';
import styles from '@styles/post.module.scss';

type TProp = {

};

const About: React.FC<TProp> = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <Container>
      <div className={styles.card}>
        I am
        {' '}
        {name}
        , I am super ultra mega handsome
      </div>
    </Container>
  );
};

export default About;
