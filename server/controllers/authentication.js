import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

// schema
import OwnerModels from '../models/models.js';

export const registration = async (req, res) => {

    const { admin, password } = req.body;

    console.log(req.body);

    try {
        const check_user_exist = await OwnerModels.findOne({ admin });

        if (check_user_exist) return res.status(404).json({ message: 'error 404 user already exist.' });

        const hash_salt = await bcrypt.hash(password, 12);

        const created_user_from_mongoose = await OwnerModels.create({
            admin: admin,
            password: hash_salt
        });

        const token = await jwt.sign({
            admin: created_user_from_mongoose.admin,
            _id: created_user_from_mongoose._id
        },
            'secretKey',
            { expiresIn: '1h' });

        res.json({ created_user_from_mongoose, token });
    } catch (error) {
        res.status(404).json({ message: 'error occured:', error });
    }
}