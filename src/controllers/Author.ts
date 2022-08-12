import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Author from "../database/schema/Author";

export const createAuthor = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body;

  return res.status(200).send({ name });
  // const author = new Author({
  // 	_id: new mongoose.Types.ObjectId(),
  // 	name
  // });

  // return author
  // 	.save()
  // 	.then(author => res.status(201).json({ author }))
  // 	.catch(error => res.status(500).json({ error }));
};

export const readAuthor = (req: Request, res: Response, next: NextFunction) => {
  const authorId = req.params.authorId;

  return Author.findById(authorId)
    .then((author) =>
      author
        ? res.status(200).json({ author })
        : res.status(404).json({ message: "not found" })
    )
    .catch((error) => res.status(500).json({ error }));
};

export const readAll = (req: Request, res: Response, next: NextFunction) => {
  return Author.find()
    .then((author) => res.status(200).json({ author }))
    .catch((error) => res.status(500).json({ error }));
};

export const updateAuthor = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorId = req.params.authorId;
  return Author.findById(authorId)
    .then((author) => {
      if (author) {
        author.set(req.body);

        return author
          .save()
          .then((author) => res.status(201).json({ author }))
          .catch((error) => res.status(500).json({ error }));
      } else res.status(404).json({ message: "not found" });
    })
    .catch((error) => res.status(500).json({ error }));
};

export const deleteAuthor = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorId = req.params.suthorId;

  return Author.findByIdAndDelete(authorId)
    .then((author) =>
      author
        ? res.status(201).json({ message: "deleted" })
        : res.status(404).json({ message: "not found" })
    )
    .catch((error) => res.status(500).json({ error }));
};
