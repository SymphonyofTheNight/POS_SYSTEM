import express from 'express';

// controllers
import { get_db, add_supplier } from '../controllers/controllers.js';

//middlewares
import middleware from '../middleware/middleware.js';

// auth 
import { registration, login_auth } from '../controllers/authentication.js';

const router = express.Router();

router.get('/', get_db);
router.post('/register', registration);


router.post('/', login_auth);
router.patch('/dashboard/supplier/:id', middleware, add_supplier);

export default router;