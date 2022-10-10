import mongoose from 'mongoose';

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

    const { id } = req.body;

    console.log(req.body);

    try {

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: 'Invalid ID' });

        const edited = await OwnerModels.findByIdAndUpdate(id, {
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
        }, (error, response) => {
            if (error) return console.log(error);
            console.log(response);
        });

        res.json(edited);

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

