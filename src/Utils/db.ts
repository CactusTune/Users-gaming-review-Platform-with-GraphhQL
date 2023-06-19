import mongoose from "mongoose";

export async function connectToMongo() {
  mongoose
    .connect(
      `mongodb+srv://ojoshegun42:GDK6GorpLwYCJDs6@graphql.ajjlopq.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
      console.log("Db connected succesfully");
    })
    .catch((err) => {
      console.log(err);
    });
}
