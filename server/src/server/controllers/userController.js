import _ from 'lodash';
import createTokens from "../utils/createTokens";
const { User } = require('../models/index');

async function createUser(req, res, next) {
    try {
        const password  = req.body.hashedPassword;
        const { firstName, lastName, displayName, email, role} = req.body.candidate;
        const { dataValues: userData } = await User.create({ firstName, lastName, displayName, email, password, role });
        const user = _.pick(userData, ['id' ,'displayName', 'email' , 'isBanned', 'role']);
        const tokens = await createTokens(user);

        res.send({user, tokens})
    } catch (e) {
        next(e);
    }

}

async function login(req, res, next) {
    try {
        const { user: userData } = req.body;
        const user =_.pick(userData, ['id' ,'displayName', 'email' , 'isBanned', 'role']);
        const tokens = await createTokens(user);

        res.send({user, tokens})
    } catch (e) {
        next(e)
    }
}

async function refresh(req, res, next) {

}

async function getUserByAccessToken(req, res, next) {
    try {
        const { id }  = req.body.decoded;
        const { dataValues: userData } = await User.findOne({where: {id}});
        const user = _.pick(userData, ['id' ,'displayName', 'email' , 'isBanned', 'role']);
        user ? res.send({user}) : next(err);
    } catch (e) {
        next(e)
    }
}

export { createUser, login, refresh, getUserByAccessToken }