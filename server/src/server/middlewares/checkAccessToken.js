import { Unauthorized, Forbidden, InternalServerError } from '../errors/index';
import jwt from 'jsonwebtoken';
import config from '../config/jwt.config';

export default async function(req, res, next) {
    try {
        const token =  req.headers.authorization.split(' ')[1];

        if (token) {
            await jwt.verify(token, config.secret, (err, decoded) => {
                if (err) {
                    next(new Forbidden())
                }
                req.body.decoded = decoded;
                next();
            });
        } else {
            next(new Unauthorized())
        }
    } catch (e) {
        next(new InternalServerError())
    }

}