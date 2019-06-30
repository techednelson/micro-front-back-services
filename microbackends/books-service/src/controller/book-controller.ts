import { Request, Response, NextFunction } from 'express';

export const findAll = (req: Request, res: Response, next: NextFunction) => {
    res.send('Get all books!');
};

export const find = (req: Request, res: Response, next: NextFunction) => {
    res.send('Get a book with id');
};

export const save = (req: Request, res: Response, next: NextFunction) => {
    res.send('Save a book');
};

export const update = (req: Request, res: Response, next: NextFunction) => {
    res.send('update a book');
};

export const remove = (req: Request, res: Response, next: NextFunction) => {
    res.send('remove a book');
};