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

