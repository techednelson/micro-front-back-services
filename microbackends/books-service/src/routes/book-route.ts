import * as express from 'express';
import { Router }  from 'express';
import { findAll, find, save, update, remove } from '../controller/book-controller';

const router: Router = express.Router();

router.get('/all', findAll);

router.get('id', find)

router.post('book', save);

router.post('id', update);

router.delete('id', remove);

export default router;