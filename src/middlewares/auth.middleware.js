const mongoose = require('mongoose');

module.exports = async (req, res, next) => {
    try {
        if ('authorization' in req.headers) {
            const token = req.headers.authorization.split('Bearer')[ 1 ].trim();
            const UserLoginModel = mongoose.model('userlogin');
            const data = await UserLoginModel.findOne({ sessionToken: token });
            req.state = data;
            return next();
        }
        return res.status(400).send({ success: false, message: 'Authorization header is required' });
    } catch (e) {
        return res.status(500).send({ success: false, message: 'Unexpected error occured!' });
    }
};
