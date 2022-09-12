import jwt_decode from 'jwt-decode';
import dotenv from 'dotenv';
import { decode } from 'jsonwebtoken';

dotenv.config();

const verifyToken = (req, res, next) => {

    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }

    /// doesnt validate the token but to read base64
    const decoded = jwt_decode(token);

    if (!decoded) return res.status(404).json({ message: 'token invalidated' });

    return next();
};

export default verifyToken;