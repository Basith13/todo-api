const mongoose= require('mongoose');
const schema = mongoose.Schema({

   userId:{
       type:mongoose.Schema.Types.ObjectId,
       required:true,
       ref:'user',
   },
   sessionToken:{
       type: String,
       required:true,
   },
   loginDateTime:{
       type: String,
       required:true,
   },
   logoutDateTime:{
       type: String,
       required:false,
   },
   expireIn:{
       type: String,
       required:true,
   },
},{
    timestamps:true,
});
mongoose.model('userlogin',schema);