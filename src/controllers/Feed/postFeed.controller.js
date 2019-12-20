const mongoose = require('mongoose');

const postFeed = async (request, response) =>{
    try{
        const FeedModel =mongoose.model('feed');
        const data = new FeedModel({
            title: request.body.title,
            description: request.body.description,
            createdBy: mongoose.mongo.ObjectId('5df297324044e025d042b258'),
        });
        await data.save();
        return response.status(200).send({ message: 'feed Sucess!!!'});
    } catch(e){
        console.log(e);
        return response.status(500).send({error:true,message: 'Internal server error!!'});
    }
};
module.exports = postFeed;