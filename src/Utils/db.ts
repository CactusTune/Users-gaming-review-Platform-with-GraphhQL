import mongoose from "mongoose";


export async function connectToMongo() {
    mongoose.connect(
        `mongodb+srv://ojoshegun42:jpW8pr8965ppaDSm@graphqlmern.xs2mipz.mongodb.net/user-events?retryWrites=true&w=majority`
        )
        .then(() => {
        console.log('Db connected succesfully')
        })
        .catch(err => {
        console.log(err);
    });
}