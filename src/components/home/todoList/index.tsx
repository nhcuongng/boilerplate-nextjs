import React, { useCallback, useEffect, useState } from 'react';
import { TStatus, TTodo } from 'src/@types';
import { API } from 'src/lib';

import { ModalEdit } from './editTodo';
import { Form } from './form';
import styles from './todoList.module.scss';

type TProp = {

};

export const TodoList: React.FC<TProp> = () => {
  const [list, setList] = useState<TTodo[]>([]);
  const [idEdit, setIdEdit] = useState('');

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = useCallback(() => {
    setIsOpen((o) => !o);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const todos = await API.get<TTodo[]>('/todos');
        setList(todos.data);
      } catch (error) {
        // console.log(error);
        error.handleGlobally();
        // ignore since error was handled globally
      }
    })();
  }, []);

  const toggleStatus = (index: number) => {
    const temp = [...list];
    const newStatus: TStatus = list[index].status === 'DONE' ? 'DOING' : 'DONE';
    temp[index].status = newStatus;
    setList(temp);
  };

  const handleAddNewTodo = (todos: TTodo[]) => {
    setList(todos);
    setIsOpen(false);
  };

  const handleOpenModal = (id: string) => {
    setIdEdit(id);
    toggleModal();
  };

  return (
    <>
      <Form onDone={handleAddNewTodo} />
      <ul className={styles.list}>
        {list.map(({ title, id, status }, index) => (
          <li key={id} className={styles.item}>
            <span onClick={() => toggleStatus(index)} className={`${styles.content} ${status === 'DONE' && styles.done}`}>
              <span>{title}</span>
              <span>
                <span className={`${styles.status} ${status === 'DONE' ? styles.statusDone : styles.statusDoing}`}>{status}</span>
              </span>
            </span>
            <i onClick={() => handleOpenModal(id)} className={`far ${styles.editIcon}`}>&#xf044;</i>
          </li>
        ))}
      </ul>
      <ModalEdit id={idEdit} isOpen={isOpen} setIsOpen={toggleModal} onDone={handleAddNewTodo} />
    </>
  );
};
