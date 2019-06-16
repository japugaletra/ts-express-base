import express, { Request, Response } from 'express';

const app = express();

app.get('/',
  (req: Request, res: Response): void => {
    const name: string = req.query.name || 'world';

    res.send({
      message: `Hello ${name}!`,
    });
  }
);

export default app;