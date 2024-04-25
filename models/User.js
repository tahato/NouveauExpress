const mongoose =require ( 'mongoose' );
const UserSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
    },
    age:{
        type:Number,
        required:true,
        min:18,
    },

});
module.exports=mongoose.model("User",UserSchema);