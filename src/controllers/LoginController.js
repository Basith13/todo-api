const mongoose = require('mongoose');
const shajs = require('sha.js');
const uuid = require('uuid');
const moment = require('moment');

const LoginController = async (request, response) => {
    try {
        const token = `${ uuid.v4() }-${ Date.now() }`.replace(/-/g, '');
        const encrypt = `${ shajs('sha256').update(token).digest('hex') }`;
        const UserModel = mongoose.model('user');
        const UserLoginModel = mongoose.model('userlogin');
        const data = await UserModel.findOne({ userName: request.body.username, password: request.body.password });
        if (data) {
            const sessionExists = await UserLoginModel.findOne({ userId: mongoose.mongo.ObjectId(data._id), logoutDateTime: null });
            if (!sessionExists) {
                const userLogin = new UserLoginModel({
                    userId: data._id,
                    sessionToken: encrypt,
                    loginDateTime: moment().format('YYYY-MM-DD HH:mm:ss'),
                    expireIn: moment().add(5, 'Hours').format('YYYY-MM-DD HH:mm:ss'),
                });
                await userLogin.save();
            } else {
                const userdata = UserLoginModel.findOneAndUpdate({ _id: sessionExists._id }, { $set: { logoutDateTime: moment().format('YYYY-MM-DD HH:mm:ss') } });
                const userLogin = new UserLoginModel({
                    userId: data._id,
                    sessionToken: encrypt,
                    loginDateTime: moment().format('YYYY-MM-DD HH:mm:ss'),
                    expireIn: moment().add(5, 'Hours').format('YYYY-MM-DD HH:mm:ss'),
                });
                await userLogin.save();
            }
            return response.status(200).send({ error: false, message: 'Successfully', token: encrypt });
        }
        return response.status(400).send({ error: true, message: 'Invalid Credentials' });
    } catch (e) {
        return response.status(500).send({ error: true, message: e.toString() });
    }
};

module.exports = LoginController;
