import { Container } from '@components/layout';
import styles from '@styles/card.module.scss';
import { useRouter } from 'next/router';
import React from 'react';

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
