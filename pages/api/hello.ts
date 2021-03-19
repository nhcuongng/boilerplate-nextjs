import { NextApiResponse, NextApiRequest } from 'next';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: 'Cuong' });
};
