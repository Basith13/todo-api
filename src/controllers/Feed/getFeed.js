const mongoose = require('mongoose');

const getFeed = async (request, response) => {
    try {
        const FeedModel = mongoose.model('feed');
        const Feed = await FeedModel.find({});
        return response.status(200).send(Feed);
    } catch (e) {
        console.log(e);
        return response.status(500).send({error: true, message:'Internal server error!'});
    }
};

module.exports = getFeed;
