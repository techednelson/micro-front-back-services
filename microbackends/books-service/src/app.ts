import * as express from 'express';
import { Application, Request, Response, NextFunction } from 'express';
import * as bodyParser from 'body-parser';

import router from './routes/book-route';

const app: Application = express();

app.use(bodyParser.json());

app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/books', router);

app.listen(5000, () => console.log('App is Up and Running!'));