import { NotFound } from '../errors';

const { User, Photo } = require('../models');

export default async function(id) {
    try {
        return await User.find({
            attributes: {
                exclude: [
                    'password', 'createdAt', 'updatedAt', 'firstName', 'lastName',
                ]
            },
            include: [{
                model: Photo,
                as: 'photo',
                attributes: {
                    exclude: [
                        'createdAt', 'updatedAt', 'id', 'userId',
                    ]
                },
                where: {id}
            }],
            raw: true,
            nest: true
        });
    } catch (e) {
        throw new NotFound();
    }
}

