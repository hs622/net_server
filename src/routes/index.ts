import { Router } from "express";
const router = Router();

import sampleRoute from './sample';

router.use('/sample', sampleRoute)

export = router;