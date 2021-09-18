import { todoApi } from '@api/todoApi';
import React, { useEffect, useState } from 'react';
import { v4 } from 'uuid';

import styles from '../todoList.module.scss';

type TProp = {
  onDone: (todos: Todo.State['TodoDetail'][]) => void;
  todo?: Todo.State['TodoDetail'];
};

const initTodo: Todo.State['TodoDetail'] = {
  id: '',
  description: '',
  status: 'DOING',
  title: '',
};

export const Form: React.FC<TProp> = ({ onDone, todo = initTodo }) => {
  const [newTodo, setNewTodo] = useState(initTodo);
  const { title, description } = newTodo;

  useEffect(() => {
    setNewTodo(todo);
  }, [todo]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof Pick<Todo.State['TodoDetail'], 'title' | 'description'>) => {
    const temp = { ...newTodo };
    temp[field] = e.target.value;
    console.log(field, e.target.value);
    setNewTodo(temp);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const bodyReq: TodoAPI.Request.Body.Update = {
        id: todo.id ? todo.id : v4(),
        description,
        title,
        status: 'DOING',
      };

      if (todo.id) {
        const res = await todoApi.updateDetail({ id: todo.id }, bodyReq);
        onDone(res.data);
      } else {
        const res = await todoApi.createNewOne(bodyReq);
        onDone(res.data);
      }
    } catch (error) {
      const statusCode = error.response ? error.response.status : null;
      // We will handle locally
      // When it's a 404 error, else handle globally
      if (statusCode === 404) {
        // Do some specific error handling logic for this request
      } else {
        error.handleGlobally();
      }
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => handleChange(e, 'title')}
        placeholder="title"
      />
      <input
        value={description}
        onChange={(e) => handleChange(e, 'description')}
        placeholder="description"
      />
      <button type="submit">Submit</button>
    </form>
  );
};
