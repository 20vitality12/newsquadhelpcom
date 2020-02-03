import _ from 'lodash';
import { InternalServerError, NotFound } from '../errors/index';
const { User, UsersData, Entry, Contest } = require('../models/index');

async function createEntry(req, res, next) {
    try {

        res.send({})
    } catch (e) {
        next(new InternalServerError());
    }
}

export {
    createEntry
}