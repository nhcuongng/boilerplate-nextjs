import 'react-responsive-modal/styles.css';

import { todoApi } from '@api/todoApi';
import React, { useEffect, useState } from 'react';
import { Modal } from 'react-responsive-modal';

import { Form } from '../form';

type TProp = {
  id: string;
  setIsOpen: () => void;
  onDone:(todo: Todo.State['TodoDetail'][]) => void;
  isOpen: boolean;
};

export const ModalEdit: React.FC<TProp> = ({
  id, isOpen, setIsOpen, onDone,
}) => {
  const [todo, setTodo] = useState<Todo.State['TodoDetail']>();

  useEffect(() => {
    if (id && isOpen) {
      (async () => {
        try {
          const res = await todoApi.getDetail({ id });
          setTodo(res.data);
        } catch (error) {
          // ignore since error was handled globally
          error.handleGlobally();
        }
      })();
    }
  }, [isOpen]);

  return (
    <Modal open={isOpen} onClose={setIsOpen} center>
      <div style={{ padding: '20px 50px' }}>
        <Form todo={todo} onDone={onDone} />
      </div>
    </Modal>
  );
};
