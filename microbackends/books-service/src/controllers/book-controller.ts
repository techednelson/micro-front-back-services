import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Book from '../entities/book';

export const findAll = async (req: Request, res: Response): Promise<void> => {
    try {
        const books: Book[] = await getRepository(Book).find();
        res.json(books);
    } catch (error) {
        res.send(error);
    }
};

export const findById = async (req: Request, res: Response): Promise<void> => {
    try {
        const book: Book = await getRepository(Book).findOne(req.body.id);
        res.send(book);
    } catch (error) {
        res.send(error);
    }
};

export const save = async (req: Request, res: Response): Promise<void> => {
    const book: Book = await getRepository(Book).save(req.body);
    res.send(book);
};

export const update = async (req: Request, res: Response): Promise<void> => {
    try {
        await getRepository(Book).update(req.body.id, req.body);
        const book: Book = await getRepository(Book).findOne(req.body.id);
        res.send(book);
    } catch (error) {
        res.send(error);
    }
};

export const remove = async (req: Request, res: Response): Promise<void> => {
    try {
        await getRepository(Book).delete(req.body.id);
        res.send('Book was successfully deleted');
    } catch (error) {
        res.send(error);
    }
};