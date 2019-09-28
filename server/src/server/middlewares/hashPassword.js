import bcrypt from 'bcrypt';
import { SALT } from '../constants/constants';

export default async function (req, res, next) {
    const { candidate } = req.body ;
    req.body.hashedPassword = await bcrypt.hash(candidate.password, SALT);
    next();
}

