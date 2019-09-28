const { User } = require('../models/index');

export default async function(req, res, next) {
    try {
        const { candidate } = req.body ;

        const { dataValues: user} = await User.find({where: {email: candidate.email}}) ;

        if (user && user.isBanned === false) {
            req.body.user = user;
            next();
        }
    } catch (e) {
        next(e)
    }

}

