import _ from 'lodash';
import createTokens from "../utils/createTokens";
import getUserById from "../utils/getUserById";
import { InternalServerError, NotFound } from '../errors/index';
import {ABOUT_ME_LIST} from "../constants/constants";
import upload from "../config/fileUplod";
const { User, UserData, Photo, Contest, Entry, Status } = require('../models/index');

async function createUser(req, res, next) {
    try {
        const { hashedPassword: password }  = req.body;
        const { firstName, lastName, displayName, email, role} = req.body.candidate;
        const { dataValues: userData } = await User.create({ firstName, lastName, displayName, email, password, role });
        const user = _.pick(userData, ['id' ,'displayName', 'email' , 'isBanned', 'role']);
        const tokens = await createTokens(user);
        await Photo.create({userId: user.id});
        await UserData.create({userId: user.id});

        res.send({user, tokens})
    } catch (e) {
        next(new InternalServerError());
    }

}

async function login(req, res, next) {
    try {
        const { user } = req.body;
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
        const user  = await getUserById(id);

        user && !user.isBanned ? res.send({user}) : next(new NotFound());
    } catch (e) {
        next(new InternalServerError(e));
    }
}

async function getUserData(req, res, next) {
    try {
        const { id }  = req.body.decoded;

        const user = await User.find({
            attributes: {exclude: ['password', 'createdAt', 'updatedAt', 'isBanned', 'email', 'role']},
            include: [{
                model: UserData,
                as: 'userData',
                attributes: {exclude: ['createdAt', 'updatedAt' ]},
                where: {id},
            }],
            raw: true,
            nest: true
        });

        user && !user.isBanned ? res.send({user}) : next(new NotFound());
    } catch (e) {
        next(new InternalServerError());
    }
}

async function getUsers(req, res, next) {
    try {
        const users = await User.findAll({
            attributes: {exclude: ['password', 'createdAt', 'updatedAt', 'firstName', 'lastName']},
            include: [{
                model: Photo,
                as: 'photo',
                attributes: {exclude: ['userId', 'createdAt', 'updatedAt','id']},

            }],
            order: [
                ['id', 'ASC']
            ],
            raw: true,
            nest: true,
        });

        users ? res.send({users}) : next(new NotFound());
    } catch (e) {
        next(new InternalServerError());
    }
}

async function switchUserStatus(req, res, next) {
    try {
        const { isBanned, id } = req.body;
        await User.update({ isBanned: !isBanned },{ where: { id },});
        const user  = await getUserById(id);
        res.send({user});
    } catch (e) {
        next(new InternalServerError());
    }
}

async function updateUserFullName(req, res, next) {
    try {
        const { id } = req.body.decoded;
        const { firstName, lastName, displayName } = req.body;
        const [,[userData]] = await User.update({firstName, lastName, displayName}, {returning: true, where: {id}});
        const updatedData = _.pick(userData, ['firstName', 'lastName', 'displayName']);

        updatedData ? res.send({updatedData}) : next(new NotFound());
    } catch (e) {
        next(new InternalServerError());
    }
}

async function updateUserAboutMe(req, res, next) {
    try {
        const { id } = req.body.decoded;
        const {
            interests,
            motivation,
            address,
            city,
            stateOrProvince,
            pin,
            country,
            phone,
            linkedIn,
            twitter
        } = req.body;

        const [,[userData]] = await UserData.update({
            interests,
            motivation,
            address,
            city,
            stateOrProvince,
            pin,
            country,
            phone,
            linkedIn,
            twitter
        }, {returning: true, where: {id}
        });

        const updatedData = _.pick(userData, ABOUT_ME_LIST);

        updatedData ? res.send({updatedData}) : next(new NotFound());
    } catch (e) {
        next(new InternalServerError());
    }
}

async function uploadUserPhoto(req, res, next) {
    try {
        const { file, id } = req.body;
        await Photo.update({
            filename: file.filename},{
            returning: true, where: {
                userId: id
            }
        });

        const user  = await getUserById(id);

        res.send({user});
    } catch (e) {
        next(new InternalServerError());
    }
}

async function updateUserPassword(req, res, next) {
    try {
        const { id } = req.body.decoded;
        const { hashedPassword } = req.body;

        await User.update( {password: hashedPassword}, {where: {id}} );
        res.send(200);
    } catch (e) {
        next(new InternalServerError());
    }
}

export {
    createUser,
    login,
    refresh,
    getUserByAccessToken,
    getUsers,
    switchUserStatus,
    getUserData,
    updateUserFullName,
    updateUserAboutMe,
    updateUserPassword,
    uploadUserPhoto
}