import { Router } from "express";
const router = Router();

import sampleRoute from './sample';
import authorRoute from './author';

router.use('/sample', sampleRoute)
router.use('/authors', authorRoute)

export = router;