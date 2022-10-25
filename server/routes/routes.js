import express from 'express';

// controllers
import {
    get_db,
    add_supplier,
    edit_supplier,
    delete_supplier,
    add_customer,
    edit_customer,
    delete_customer,
    add_products,
    edit_product,
    delete_product,
    add_sales
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

router.post('/Products/:id', middleware, add_products);
router.patch('/Products/:id', middleware, edit_product);
router.put('/Products/:id', middleware, delete_product);

router.post('/Sales/:id', middleware, add_sales);

export default router;