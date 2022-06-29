const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://Aarush_Notes:!%40%23%24AarushPopli00@cluster0.sokqf5l.mongodb.net/?retryWrites=true&w=majority";
const connectToMongo = async ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to mongo successfully");
    });
}
module.exports = connectToMongo;
