import express from 'express';

// controllers
import {
    get_db,
    add_supplier,
    edit_supplier,
    delete_supplier,
    add_customer,
    edit_customer,
    delete_customer
} from '../controllers/controllers.js';

//middlewares
import middleware from '../middleware/middleware.js';

// auth 
import { registration, login_auth } from '../controllers/authentication.js';

const router = express.Router();

router.get('/', get_db);
router.post('/register', registration);

router.post('/', login_auth);
router.post('/Supplier/:id', middleware, add_supplier);
router.patch('/Supplier/:id', middleware, edit_supplier);
router.put('/Supplier/:id', middleware, delete_supplier);

router.post('/Customer/:id', middleware, add_customer);
router.patch('/Customer/:id', middleware, edit_customer);
router.put('/Customer/:id', middleware, delete_customer);



export default router;