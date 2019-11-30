import { Forbidden } from '../errors/index';
import { ADMIN } from "../constants/constants";

export default function (req,res,next){
    const { role } = req.body.decoded;
    if( role && role === ADMIN ) {
        next();
    } else {
        next(new Forbidden());
    }
};