import 'babel-polyfill';
import express from 'express';
import userRouter from './userRouter';
import contestRouter from './contestRouter';
import entriesRouter from './entriesRouter';

const router = express.Router();

router.use('/user', userRouter);
router.use('/contest', contestRouter);
router.use('/entry', entriesRouter);

module.exports = router;

