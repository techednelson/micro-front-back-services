import express, { Application, Request, Response, NextFunction } from 'express';
import * as bodyParser from 'body-parser';
import { createConnection } from 'typeorm';
import router from './routes/book-route';

createConnection()
  .then(() => {
    console.log('Connection to database was successful!');
    const app: Application = express();

    app.use(bodyParser.json());

    app.use((req: Request, res: Response, next: NextFunction) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE'
      );
      res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization'
      );
      next();
    });

    app.use('/books', router);

    app.listen(4000, () => console.log(`🚀 Server ready at http://localhost:4000`));
  })
  .catch((error: any) => console.log(error));
