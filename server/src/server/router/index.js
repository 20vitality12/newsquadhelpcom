import 'babel-polyfill';
import express from 'express';
import userRouter from './userRouter';

const router = express.Router();

router.use('/user', userRouter);

module.exports = router;

