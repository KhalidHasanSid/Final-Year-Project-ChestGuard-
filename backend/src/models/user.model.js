import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"


const user = mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim:true
    },
    email:{
        type:String,
        required: true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:[true,"password is essential"]
    },

    refresh_token:{
        type:String,
        required:true 
    }
})


userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = bcrypt.hash(this.password, 10);
    next();
});

user.methods.validatePassword=async (password)=>{
   return  await  bcrypt.compare(password,this.password)
}

user.methods.generateAccessToken=async function(){
    jwt.sign({_id:this._id},process.env.ACCESS_TOKEN_SECRET,{ expiresIn:process.env.ACCESS_TOKEN_EXPIRY})
}
user.methods.generateRefreshToken=async function(){
    jwt.sign({_id:this._id},
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn:process.env.REFRESH_TOKEN_EXPIRY})
}




const User=mongoose.model("User",user)






export default  User 