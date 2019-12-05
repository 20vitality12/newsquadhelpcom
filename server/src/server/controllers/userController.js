import _ from 'lodash';
import createTokens from "../utils/createTokens";
import { InternalServerError, NotFound } from '../errors/index';
import {ABOUT_ME_LIST} from "../constants/constants";
import upload from "../config/fileUplod";
const { User, UsersData, Photo } = require('../models/index');

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
        const user =_.pick(userData, ['id' ,'displayName', 'email' , 'isBanned', 'role', 'filename']);
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
        const {dataValues: additionalData, User: userData } = await Photo.findOne({
            include: [{
                model: User,
                attributes: {
                    exclude: [
                        'password', 'createdAt', 'updatedAt', 'firstName', 'lastName',
                    ]},
                where: {id}
            }],
        });


        const { dataValues: userDataFromDB } = userData;
        const filename = _.pick(additionalData, 'filename');
        const user = _.assign(userDataFromDB, filename);

        user && !user.isBanned ? res.send({user}) : next(new NotFound());
    } catch (e) {
        next(new InternalServerError(e));

    }
}
async function getUserData(req, res, next) {
    try {
        const { id }  = req.body.decoded;

        const { dataValues: additionalData, User: fullNameData }  = await UsersData.findOne({
            include: [{
                model: User,
                attributes: {
                    exclude: [
                        'password', 'createdAt', 'updatedAt', 'isBanned', 'email', 'role'
                    ]},
                where: {id}
            }],
        });

        const { dataValues: userName } = fullNameData;
        const aboutMe = _.pick(additionalData, ABOUT_ME_LIST);
        const user = _.assign(aboutMe, userName);

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
            returning: true, where: {
                id
            }
        });
        const user = _.pick(userData, ['id' ,'displayName', 'email' , 'isBanned', 'role']);
        res.send({user});
    } catch (e) {
        next(new InternalServerError());
    }
}

async function updateUserFullName(req, res, next) {
    try {
        const { id } = req.body.decoded;
        const { firstName, lastName, displayName } = req.body;
        const [,[userData]] = await User.update({
            firstName, lastName, displayName
        },{
            returning: true, where: {
                id
            }
        });
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

        const [,[userData]] = await UsersData.update({
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
        },{
            returning: true, where: {
                id
            }
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
        const [,[dataValues]] = await Photo.update({
            filename: file.filename},{
            returning: true, where: {
                userId: id
            }
        });
        const fileName = _.pick(dataValues, 'filename');
        res.send(fileName);
    } catch (e) {
        next(new InternalServerError());
    }
}

async function updateUserPassword(req, res, next) {
    try {
        console.log(req.body)
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