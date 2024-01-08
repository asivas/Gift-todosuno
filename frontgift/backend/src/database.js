import mongoose from "mongoose";
require("dotenv").config();

(async () => {
  try {
    mongoose.set("strictQuery", true);
    const db = await mongoose.connect(process.env.MONGO_TEST);
    console.log("dbbbb", db.connection.name);
    mongoose.connection.db.listCollections().toArray(function (err, collections) {
      console.log("colecciones", collections);
    }); 
  } catch (error) {
    console.log(error);
  }
})();

 