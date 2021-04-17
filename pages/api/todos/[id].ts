import { NextApiRequest, NextApiResponse } from 'next';
import { TodoDummyData } from 'src/__mocks__';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  if (req.method === 'PUT') {
    const index = TodoDummyData.findIndex(({ id: _id }) => id === _id);
    TodoDummyData[index] = req.body;
    res.status(200).json(TodoDummyData);
    return;
  }

  const todo = TodoDummyData.find(({ id: _id }) => id === _id);
  if (todo) {
    res.status(200).json(todo);
    return;
  }
  res.status(404).send('not found todo');
};
