import mongoose from "mongoose";

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    game: { 
        type: Schema.Types.ObjectId, 
        ref: 'Game', required: true 
    },
    user: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', required: true 
    },
    rating: { 
        type: Number, 
        required: true 
    },
    comment: { 
        type: String, 
        required: true 
    },
});

const Review = mongoose.model('Review', reviewSchema);
export default Review