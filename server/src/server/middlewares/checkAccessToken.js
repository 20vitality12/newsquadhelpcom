import jwt from 'jsonwebtoken'
import config from '../config/jwt.config';

export default async function(req, res, next) {
    try {
        const token =  req.headers.authorization.split(' ')[1];

        if (token) {
            await jwt.verify(token, config.secret, (err, decoded) => {
                if (err) {
                    res.send(419)
                }
                req.body.decoded = decoded;
                next();
            });
        } else {
            res.send(401);
        }
    } catch (e) {
        next(e)
    }

}