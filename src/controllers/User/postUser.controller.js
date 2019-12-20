const mongoose = require('mongoose');



const postUser = async (request, response) =>{
    try{
        const UserModel = mongoose.model('user');
        const data = new UserModel(request.body);
        await data.save();
        return response.status(200).send({ message: 'User Sucess!!!'});

    } catch(e){
        console.log(e);
        return response.status(500).send({error:true,message: 'Internal server error!!'});
    }
};
module.exports = postUser;