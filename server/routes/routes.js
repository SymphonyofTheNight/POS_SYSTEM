import express from 'express';

// controllers
import { get_db } from '../controllers/controllers.js';

//middlewares
import middleware from '../middleware/middleware.js';

// auth 
import { registration, login_auth } from '../controllers/authentication.js';

const router = express.Router();

router.get('/', get_db);
router.post('/register', registration);
router.post('/admin', middleware, login_auth);

export default router;