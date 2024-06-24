import { Request, Response } from 'express';
import { getText } from '../services/example.services';

const showExample = (_req: Request, res: Response) => {
  res.status(200).json({
    message: getText(),
  });
};

export { showExample };
