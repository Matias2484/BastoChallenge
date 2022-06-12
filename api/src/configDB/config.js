const mongoose = require("mongoose");


//Put MondoDB URI
const MONGODB_URI = 'mongodb://localhost:27017/BastoChallenge'


//Connecting with MongoDB
const dbConnection = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
       useUnifiedTopology: true,
    });
    console.log("database connect");
  } catch (error) {
    console.log(error);
    throw new Error("error a la hora de conectar");
  }
};


module.exports = {
  dbConnection,
};
