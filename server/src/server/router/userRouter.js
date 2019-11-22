import 'babel-polyfill';
import express from 'express';
import * as userController from '../controllers/userController';
import hashPassword from '../middlewares/hashPassword';
import getUser from '../middlewares/getUserFomDb';
import checkPassword from "../middlewares/checkPassword";
import checkRefreshTokensCount from "../middlewares/checkRefreshTokensCount";
import checkAccessToken from "../middlewares/checkAccessToken";
import checkRefreshToken from "../middlewares/checkRefreshToken";
import getRefreshToken from "../middlewares/getRefreshToken";

const router = express.Router();

router.post('/create', hashPassword, userController.createUser);
router.post('/login', getUser, checkPassword, checkRefreshTokensCount, userController.login);
router.post('/get-user', checkAccessToken, userController.getUserByAccessToken);
router.post('/refresh', checkRefreshToken, getRefreshToken, userController.refresh);
router.post('/switch-user-status', checkAccessToken, userController.switchUserStatus);
router.get('/get-users', checkAccessToken, userController.getUsers);

module.exports = router;
