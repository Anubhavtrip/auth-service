const mongoose = require('mongoose');

//mongo db connection
const connectDB = async () => {
    try{
        await  mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('DB Connected ...');
    }catch (err){
        console.log("mongo connection error - ",err.message);
        process.exit(1); //stop the node process

    }
}

module.exports = connectDB;