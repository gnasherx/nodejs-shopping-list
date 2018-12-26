import mongoose from "mongoose";
import constants from "./constants";

mongoose.Promise = global.Promise;

try {
  mongoose.connect(constants.MONGO_URL);
} catch (error) {
  mongoose.createConnection(constants.MONGO_URL);
}

mongoose.connection
  .once("open", function() {
    console.log("Mongodb is running..");
  })
  .on("error", function(error) {
    console.log("Something is woring with Mongodb, Error is: ", error);
    throw error;
  });
