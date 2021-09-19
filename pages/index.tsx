import 'react-toastify/dist/ReactToastify.css';

import { Container } from '@components/layout';
import { TodoList } from '@views/home';
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
