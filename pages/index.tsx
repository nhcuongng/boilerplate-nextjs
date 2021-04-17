import 'react-toastify/dist/ReactToastify.css';
import React from 'react';

import { Container } from '@components/layout';
import { TodoList } from '@components/home';

/**
 * Home component
 * @returns
 */
const Home = () => (
  <Container>
    <TodoList />
  </Container>
);

export default Home;
