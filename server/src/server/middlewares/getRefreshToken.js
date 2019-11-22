import { Unauthorized, InternalServerError } from '../errors/index';
import jwt from 'jsonwebtoken';
import config from '../config/jwt.config';
const { RefreshToken } = require('../models/index');

export default async function (req, res, next) {
    try {
        const { refreshToken: tokenString } = req.body;

        const { dataValues: refreshTokenFromDb } = await RefreshToken.find({where: {tokenString}});

        if(refreshTokenFromDb) {
            next();
        }  else {
            next(new Unauthorized());
        }
    } catch (e) {
        next(new InternalServerError())
    }
}