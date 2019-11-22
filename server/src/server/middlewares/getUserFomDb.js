import { NotFound, InternalServerError } from '../errors/index';
const { User } = require('../models/index');

export default async function(req, res, next) {
    try {
        const { candidate } = req.body ;

        const { dataValues: user} = await User.find({where: {email: candidate.email}}) ;

        if (user && !user.isBanned) {
            req.body.user = user;
            next();
        } else (
            next(new NotFound())
        )
    } catch (e) {
        next(new NotFound())
    }

}

