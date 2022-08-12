import express from "express";
import {
  readAll,
  createAuthor,
  readAuthor,
  updateAuthor,
  deleteAuthor,
} from "../controllers/Author";

const router = express.Router();

router.get("/", readAll);
router.post("/create", createAuthor);
router.get("/get/:authorId", readAuthor);
router.patch("/update/:authorId", updateAuthor);
router.delete("/detele/:authorId", deleteAuthor);

export default router;
