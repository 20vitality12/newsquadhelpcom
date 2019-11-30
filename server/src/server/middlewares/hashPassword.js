import bcrypt from 'bcrypt';
import { SALT } from '../constants/constants';
import { InternalServerError } from '../errors/index';

export default async function (req, res, next) {
    try {
        const { candidate } = req.body ;
        req.body.hashedPassword = await bcrypt.hash(candidate.password, SALT);
        next();
    } catch (e) {
        next(new InternalServerError());
    }
}

