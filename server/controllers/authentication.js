import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

// schema
import OwnerModels from '../models/models.js';

export const registration = async (req, res) => {

    const { admin, password } = req.body;

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
            process.env.TOKEN,
            { expiresIn: '5h' });

        res.json({ created_user_from_mongoose, token });
    } catch (error) {
        res.status(404).json({ message: 'error occured:', error });
    }
}

export const login_auth = async (req, res) => {

    const { admin, password } = req.body;

    try {
        const check_user = await OwnerModels.findOne({ admin });

        if (!check_user) return res.status(404).json({ message: 'error 404 user does not exist' });

        const _check_hash = await bcrypt.compare(password, check_user.password);

        if (!_check_hash) return res.status(404).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ admin: check_user.admin, _id: check_user._id }, process.env.TOKEN, { expiresIn: '1h' });

        res.json({ result: check_user, token });
    } catch (error) {
        res.status(404).json({ message: 'error occured:', error });
    }
}