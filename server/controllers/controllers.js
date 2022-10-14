import mongoose, { mongo } from 'mongoose';

// schema
import OwnerModels from '../models/models.js';

export const get_db = async (req, res) => {
    try {
        const database = await OwnerModels.find({});
        res.status(200).json(database);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

/// supplier controllers

export const add_supplier = async (req, res) => {

    const { id } = req.params;

    console.log(req.body);

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: 'invalid ID' });

        await OwnerModels.findByIdAndUpdate(id, {
            $push: {
                supplier:
                {
                    supplier_name: req.body.supplier[0].supplier_name,
                    address: req.body.supplier[0].address,
                    contact_person: req.body.supplier[0].contact_person,
                    contact_number: req.body.supplier[0].contact_number,
                    note: req.body.supplier[0].note
                }
            }
        }, {
            new: true
        });

    } catch (error) {
        res.status(404).json(error);
    }
}

export const edit_supplier = async (req, res) => {

    const { id } = req.params;

    console.log(req.body);

    try {

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: 'Invalid ID' });

        const re_submit_supplier = await OwnerModels.findByIdAndUpdate(id, {
            $set: {
                "supplier.$[i].supplier_name": req.body.supplier[0].supplier_name,
                "supplier.$[i].address": req.body.supplier[0].address,
                "supplier.$[i].contact_person": req.body.supplier[0].contact_person,
                "supplier.$[i].contact_number": req.body.supplier[0].contact_number,
                "supplier.$[i].note": req.body.supplier[0].note
            }
        }, {
            arrayFilters: [
                {
                    "i.contact_number": req.body.supplier[0].contact_number,
                }
            ],
            returnDocument: 'after',
            safe: true
        }, (error, response) => {
            if (error) return console.log(error);
            console.log(response);
        });

        res.json(re_submit_supplier);

    } catch (error) {
        res.status(404).json(error);
    }

}

export const delete_supplier = async (req, res) => {

    const { id } = req.params;

    console.log(req.body);

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: 'Invalid ID' });

        await OwnerModels.findByIdAndUpdate(id, {
            $pull: {
                supplier: {
                    _id: req.body.supplier[0]._id
                }
            }
        }, {
            new: true
        });

    } catch (error) {
        res.status(404).json(error);
    }
}

// customer controllers

export const add_customer = async (req, res) => {

    const { id } = req.params;

    console.log(req.body);

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: 'invalid ID' });

        await OwnerModels.findByIdAndUpdate(id, {
            $push: {
                customer: {
                    fullname: req.body.customer[0].fullname,
                    address: req.body.customer[0].address,
                    contact_number: req.body.customer[0].contact_number,
                    product_name: req.body.customer[0].product_name,
                    total: req.body.customer[0].total,
                    note: req.body.customer[0].note,
                    due_date: req.body.customer[0].due_date
                }
            }
        }, {
            new: true
        })

    } catch (error) {
        res.status(404).json(error);
    }
}

export const edit_customer = async (req, res) => {

    const { id } = req.params;

    console.log(req.body);

    try {

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: 'Invalid ID' });

        await OwnerModels.findByIdAndUpdate(id, {
            $set: {
                "customer.$[i].fullname": req.body.customer[0].fullname,
                "customer.$[i].address": req.body.customer[0].address,
                "customer.$[i].contact_number": req.body.customer[0].contact_number,
                "customer.$[i].product_name": req.body.customer[0].product_name,
                "customer.$[i].total": req.body.customer[0].total,
                "customer.$[i].note": req.body.customer[0].note,
                "customer.$[i].due_date": req.body.customer[0].due_date,
            }
        }, {
            arrayFilters: [
                {
                    "i.contact_number": req.body.customer[0].contact_number
                }
            ],
            returnDocument: 'after',
            safe: true
        });

    } catch (error) {
        res.status(404).json(error);
    }
}

export const delete_customer = async (req, res) => {

    const { id } = req.params;

    console.log(req.body);

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: 'Invalid ID' });

        await OwnerModels.findByIdAndUpdate(id, {
            $pull: {
                customer: {
                    _id: req.body.customer[0]._id
                }
            }
        }, {
            new: true
        });

    } catch (error) {
        res.status(404).json(error);
    }

}

// product controllers

export const add_products = async (req, res) => {

    const { id } = req.params;

    console.log(req.body);

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: 'Invalid ID' });

        await OwnerModels.findByIdAndUpdate(id, {
            $push: {
                products: {
                    brand_name: req.body.products[0].brand_name,
                    generic_name: req.body.products[0].generic_name,
                    category_description: req.body.products[0].category_description,
                    selling_price: req.body.products[0].selling_price,
                    original_price: req.body.products[0].original_price,
                    quantity: req.body.products[0].quantity,
                    supplier: req.body.products[0].supplier,
                    added_date: req.body.products[0].added_date,
                    expiration_date: req.body.products[0].expiration_date,
                }
            },
        }, { new: true });

    } catch (error) {
        res.status(404).json(error);
    }
}

export const edit_product = async (req, res) => {

    const { id } = req.params;

    console.log(req.body);

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: 'Invalid ID' });

        await OwnerModels.findByIdAndUpdate(id, {
            $set: {
                "products.$[i].brand_name": req.body.products[0].brand_name,
                "products.$[i].generic_name": req.body.products[0].generic_name,
                "products.$[i].category_description": req.body.products[0].category_description,
                "products.$[i].selling_price": req.body.add_products[0].selling_price,
                "products.$[i].original_price": req.body.products[0].original_price,
                "products.$[i].quantity": req.body.products[0].quantity,
                "products.$[i].supplier": req.body.products[0].supplier,
                "products.$[i].added_date": req.body.products[0].added_date,
                "products.$[i].expiration_date": req.body.products[0].expiration_date,
            }
        }, {
            arrayFilters: [
                {
                    "i.brand_name": req.body.products[0].brand_name
                }
            ],
            returnDocument: 'after',
            safe: true
        })
    } catch (error) {
        res.status(404).json(error);
    }
}

export const delete_product = async (req, res) => {

    const { id } = req.params;

    console.log(req.body);

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: 'Invalid ID' });

        await OwnerModels.findByIdAndUpdate(id, {
            $pull: {
                _id: req.body.products[0]._id
            }
        }, {
            new: true
        })

    } catch (error) {
        res.status(404).json(error);
    }
}



