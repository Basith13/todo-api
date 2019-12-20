const mongoose = require('mongoose');

const getUsers = async (request, response) => {
    try {
        const UserModel = mongoose.model('user');
        const user = await UserModel.find({});
        return response.status(200).send(user);
    } catch (e) {
        console.log(e);
        return response.status(500).send({error: true, message:'Internal server error!'});
    }
};

module.exports = getUsers;
