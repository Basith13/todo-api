const mongoose = require('mongoose');

const deleteUser = async (request, response) => {
    try{
        const UserModel = mongoose.model('user');
        const user = await UserModel.deleteOne({_id: mongoose.mongo.ObjectId(request.query.userId)});
        return response.status(200).send({ message: 'Delete User Success!', data:user});   
    } catch (e) {
        return response.status(500).send({error: true, message:'Internal Server error!'});
        }
};

module.exports = deleteUser;