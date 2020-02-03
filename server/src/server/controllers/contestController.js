import _ from 'lodash';
import { InternalServerError, NotFound } from '../errors/index';
const { User, UsersData, Photo, Contest } = require('../models/index');

async function createContest(req, res, next) {
    try {

        res.send({})
    } catch (e) {
        next(new InternalServerError());
    }
}

export {
    createContest
}