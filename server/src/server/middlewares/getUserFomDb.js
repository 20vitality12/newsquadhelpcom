import _ from 'lodash';
import { NotFound, InternalServerError } from '../errors/index';
const { User, Photo } = require('../models/index');

export default async function(req, res, next) {
    try {
        const { candidate } = req.body ;

        const { dataValues: userData} = await User.find({where: {email: candidate.email}}) ;
        const { dataValues: photo} = await Photo.find({where: {userId: userData.id}});

        const user = _.assign(userData, photo);

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

