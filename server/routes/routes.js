import express from 'express';

// controllers
import { get_db } from '../controllers/controllers.js';

const router = express.Router();

router.get('/', get_db);

export default router;