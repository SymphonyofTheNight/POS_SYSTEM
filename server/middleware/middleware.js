import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const verifyToken = (req, res, next) => {

    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }

    jwt.verify(token, process.env.TOKEN, (err, decoded) => {
        if (err) return console.log(err);

        console.log({ decoded: decoded });
        if (decoded) {

            req.user = decoded;

            return next();
        }
    });

};

export default verifyToken;  