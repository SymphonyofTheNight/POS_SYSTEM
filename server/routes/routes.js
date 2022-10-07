import express from 'express';

// controllers
import { get_db, add_supplier, edit_supplier } from '../controllers/controllers.js';

//middlewares
import middleware from '../middleware/middleware.js';

// auth 
import { registration, login_auth } from '../controllers/authentication.js';

const router = express.Router();

router.get('/', get_db);
router.post('/register', registration);


router.post('/', login_auth);
router.post('/dashboard/supplier/:id', middleware, add_supplier);
router.patch('/dashboard/supplier/:id', middleware, edit_supplier);

export default router;