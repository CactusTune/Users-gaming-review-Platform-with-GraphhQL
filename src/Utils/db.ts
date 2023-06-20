import mongoose from "mongoose";

export async function connectToMongo() {
  mongoose
    .connect(process.env.MONGODB_URI || "")
    .then(() => {
      console.log("Db connected succesfully");
    })
    .catch((err) => {
      console.log(err);
    });
}
