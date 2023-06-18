import mongoose,{ Document } from "mongoose";

interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
  reviewedGames: Object[];
}

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})

const User = mongoose.model<UserDocument>('User', userSchema);
export default User