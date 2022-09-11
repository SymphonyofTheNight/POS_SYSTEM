import express from 'express';

// controllers
import { get_db } from '../controllers/controllers.js';

// auth 
import { registration } from '../controllers/authentication.js';

const router = express.Router();

router.get('/', get_db);
router.post('/register', registration);

export default router;