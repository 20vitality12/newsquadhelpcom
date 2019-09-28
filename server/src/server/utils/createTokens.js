import config from "../config/jwt.config";
import jwt from 'jsonwebtoken';
const { RefreshToken } = require('../models/index');

export default async function (user) {
    const { id, role } = user;
    const accessToken = await jwt.sign({id, role}, config.secret, {expiresIn: config.tokenLife});
    const refreshToken = await jwt.sign({id, role}, config.refreshTokenSecret, {expiresIn: config.refreshTokenLife});
    const tokens = { accessToken, refreshToken };

    await RefreshToken.create({userId: user.id, tokenString: refreshToken});
    return tokens;
}