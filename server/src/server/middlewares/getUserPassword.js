import { NotFound, InternalServerError } from '../errors/index';
const { User } = require('../models/index');

export default async function(req, res, next) {
    try {
        const { id } = req.body.decoded;
        const { dataValues: userData} = await User.find({where: {id}}) ;

        if (userData) {
            req.body.passwordFromDB = userData.password;
            next()
        } else {
            next(new NotFound())
        }
    } catch (e) {
        next(new NotFound())
    }

}

