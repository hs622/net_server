import express from "express";
import controller from '../controllers/Author';

const router = express.Router();

router.get('/', controller.readAll);
router.post('/create', controller.createAuthor);
router.get('/get/:authorId', controller.readAuthor);
router.patch('/update/:authorId', controller.updateAuthor);
router.delete('/detele/:authorId', controller.deleteAuthor);

export = router;