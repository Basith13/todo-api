
const mongoose = require('mongoose');

const deleteFeed = async (request, response) => {
    try{
        const FeedModel = mongoose.model('feed');
        const feed = await FeedModel.deleteOne({_id: mongoose.mongo.ObjectId(request.query.userId)});
        return response.status(200).send({ message: 'Delete User Success!', data: feed});   
    } catch (e) {
        return response.status(500).send({error: true, message:'Internal Server error!'});
    }
};

module.exports = deleteFeed;