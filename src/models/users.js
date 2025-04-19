//user models

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
        },
        password:{
            type:String,
            required:true,
            minlength:6,
            select:false
        },
        role:{
            type:String,
            enum:['user','admin','hr'],
            default:'user'
        },
        department:{
            type:String,
                                                                                            enum:['IT','HR','Finance','Sales','Marketing'],
            default:'IT'
        },
        isActive:{
            type:Boolean,
            default:true,
            select:false
        },
        designation:{
            type:String,
            enum:['Manager','HR','Developer','Tester','Analyst','Sales','Marketing'],
            default:'Developer'
        }

    },
    {
        timestamps:true    //when new user added then add two extra fields created_at and updated_at
    }
)

module.exports = mongoose.model('User',userSchema);