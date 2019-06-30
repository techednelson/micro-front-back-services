import express, { Router } from 'express';
import { findAll, findById, save, update, remove } from '../controllers/book-controller';

const router: Router = express.Router();

router.get('/all', findAll);

router.get('id', findById);

router.post('book', save);

router.post('id', update);

router.delete('id', remove);

export default router;