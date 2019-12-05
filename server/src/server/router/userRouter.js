import 'babel-polyfill';
import express from 'express';
import * as userController from '../controllers/userController';
import hashPassword from '../middlewares/hashPassword';
import getUser from '../middlewares/getUserFomDb';
import checkPassword from "../middlewares/checkPassword";
import checkRefreshTokensCount from "../middlewares/checkRefreshTokensCount";
import checkAccessToken from "../middlewares/checkAccessToken";
import checkRefreshToken from "../middlewares/checkRefreshToken";
import checkAdminAccess from "../middlewares/checkAdminAccess";
import getRefreshToken from "../middlewares/getRefreshToken";
import upload from "../middlewares/fileUpload";


const router = express.Router();

router.post('/create', hashPassword, userController.createUser);
router.post('/login', getUser, checkPassword, checkRefreshTokensCount, userController.login);
router.post('/get-user', checkAccessToken, userController.getUserByAccessToken);
router.post('/refresh', checkRefreshToken, getRefreshToken, userController.refresh);
router.post('/switch-user-status', checkAccessToken, checkAdminAccess, userController.switchUserStatus);
router.post('/update-user-full-name', checkAccessToken,  userController.updateUserFullName);
router.post('/update-user-about-me', checkAccessToken,  userController.updateUserAboutMe);
router.post('/update-user-password', checkAccessToken,  userController.updateUserPassword);
router.post('/upload-user-photo', checkAccessToken, upload, userController.uploadUserPhoto);
router.get('/get-users', checkAccessToken, checkAdminAccess, userController.getUsers);
router.get('/get-user-data', checkAccessToken, userController.getUserData);

module.exports = router;
