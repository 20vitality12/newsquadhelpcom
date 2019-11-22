import { Unauthorized, InternalServerError } from '../errors/index';
import jwt from 'jsonwebtoken';
import config from '../config/jwt.config';

export default async function (req, res, next) {
    try {
        const { refreshToken } = req.body;

        if (refreshToken) {
            jwt.verify(refreshToken, config.refreshTokenSecret, (err, decoded) => {
                if (err) {
                    return next(new Unauthorized())
                }
                req.body.decoded = decoded;
                next();
            });
        } else {
            return next(new Unauthorized());
        }
    } catch (e) {
        next(new InternalServerError())
    }
}