import bcrypt from 'bcrypt';

export default async function (req, res, next) {
    try {
        const { candidate, user } = req.body;
        const match = await bcrypt.compare(candidate.password, user.password);
        if (match) {
            next();
        }
    } catch (e) {
        next(err);
    }

}

