const mongoose = require('mongoose');

const schema = mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        true: String,
        required: false,
    },
    mobileNo:{
        type: String,
        required: true, 
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    }, 
    userName:{
        type: String,
        required: true,
    },
},{
    timestamps: true,
});
mongoose.model('user', schema);
