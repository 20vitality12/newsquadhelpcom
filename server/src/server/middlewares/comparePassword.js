import { NotFound, InternalServerError } from '../errors/index';
import bcrypt from 'bcrypt';

export default async function(req, res, next) {
    try {
        const { password, passwordFromDB, newPasswordRepeat } = req.body;
        const match = await bcrypt.compare( password, passwordFromDB);
        const candidate = {password: newPasswordRepeat};
        if (match) {
            req.body.candidate = candidate;
            next();
        } else {
            next(new NotFound());
        }
    } catch (e) {
        next(new InternalServerError());
    }

}

