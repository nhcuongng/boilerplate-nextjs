import { NextApiResponse, NextApiRequest } from 'next';
import { TodoDummyData } from 'src/__mocks__';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    TodoDummyData.push(req.body);
  }

  res.status(200).json(TodoDummyData);
};
