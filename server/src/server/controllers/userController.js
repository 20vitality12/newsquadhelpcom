import _ from 'lodash';
import createTokens from "../utils/createTokens";
import { InternalServerError, NotFound } from '../errors/index';
const { User,RefreshToken } = require('../models/index');

async function createUser(req, res, next) {
    try {
        const password  = req.body.hashedPassword;
        const { firstName, lastName, displayName, email, role} = req.body.candidate;
        const { dataValues: userData } = await User.create({ firstName, lastName, displayName, email, password, role });
        const user = _.pick(userData, ['id' ,'displayName', 'email' , 'isBanned', 'role']);
        const tokens = await createTokens(user);

        res.send({user, tokens})
    } catch (e) {
        next(new InternalServerError());
    }

}

async function login(req, res, next) {
    try {
        const { user: userData } = req.body;
        const user =_.pick(userData, ['id' ,'displayName', 'email' , 'isBanned', 'role']);
        const tokens = await createTokens(user);

        res.send({user, tokens})
    } catch (e) {
        next(new InternalServerError());
    }
}

async function refresh(req, res, next) {
    try {
        const { decoded: user } = req.body;
        const tokens = await createTokens(user);

        res.send({tokens})
    } catch (e) {
        next(new InternalServerError())
    }
}

async function getUserByAccessToken(req, res, next) {
    try {

        const { id }  = req.body.decoded;
        const { dataValues: userData } = await User.findOne({where: {id}});
        const user = _.pick(userData, ['id' ,'displayName', 'email' , 'isBanned', 'role']);

        user && !user.isBanned ? res.send({user}) : next(new NotFound());
    } catch (e) {
        next(new InternalServerError());
    }
}

async function getUsers(req, res, next) {
    try {
        const users  = await User.findAll({
            order: [
                ['id', 'ASC']
            ],
            attributes: { exclude: ['password', 'createdAt', 'updatedAt', 'firstName', 'lastName']}
        });
        users ? res.send({users}) : next(new NotFound());
    } catch (e) {
        next(new InternalServerError());
    }
}

async function switchUserStatus(req, res, next) {
    try {
        const {isBanned, id} = req.body;
        const [,[userData]] = await User.update({
            isBanned: !isBanned
        },{
            returning:true, where: {
                id
            }
        });
        const user = _.pick(userData, ['id' ,'displayName', 'email' , 'isBanned', 'role']);
        res.send({user});
    } catch (e) {
        next(new InternalServerError());
    }
}

export { createUser, login, refresh, getUserByAccessToken, getUsers, switchUserStatus }