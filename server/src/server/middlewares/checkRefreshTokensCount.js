import { InternalServerError } from '../errors/index';
const { RefreshToken } = require('../models/index');

export default async function (req, res, next) {
    try {
        const { user } = req.body;

        const refreshTokensInDB = await RefreshToken.count({where: {userId: user.id}});

        if(refreshTokensInDB > 2) {
            RefreshToken.destroy({where: {userId: user.id}})
        }
        next();
    } catch (e) {
        next(new InternalServerError());
    }
}
