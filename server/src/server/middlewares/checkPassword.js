import { NotFound, InternalServerError } from '../errors/index';
import bcrypt from 'bcrypt';

export default async function (req, res, next) {
    try {
        const { candidate, user } = req.body;
        const match = await bcrypt.compare(candidate.password, user.password);
        if (match) {
            next();
        } else {
            next(new NotFound());
        }

    } catch (e) {
        next(new InternalServerError());
    }

}

