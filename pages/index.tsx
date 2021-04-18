import 'react-toastify/dist/ReactToastify.css';

import { TodoList } from '@components/home';
import { Container } from '@components/layout';
import React from 'react';

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
