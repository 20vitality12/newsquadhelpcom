import _ from 'lodash';
import { NotFound, InternalServerError } from '../errors/index';
const { User, Photo } = require('../models/index');

export default async function(req, res, next) {
    try {
        const { candidate } = req.body ;

        const user = await User.find({
            attributes: {exclude: ['createdAt', 'updatedAt', 'firstName', 'lastName']},
            where: {email: candidate.email},
            include: [{
                model: Photo,
                as: 'photo',
                attributes: {exclude: ['userId', 'createdAt', 'updatedAt','id']},

            }],
            raw: true,
            nest: true,
        });
        console.log(user)
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

