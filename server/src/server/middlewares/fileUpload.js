import upload from "../config/fileUplod";
import { InternalServerError } from '../errors/index';
export default async function (req, res, next) {
    try {
        const {id} = req.body.decoded;
        upload(req, res, err =>{
            if (err){
                next(err)
            } else {
                req.body.file = req.file;
                req.body.id = id;
                next();
            }
        });

    } catch (e) {
        next(new InternalServerError());
    }
}