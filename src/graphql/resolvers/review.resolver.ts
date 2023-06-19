import Review from "../../models/review.model";
import Game from "../../models/game.model";
import User from "../../models/user.model";

const reviewResolvers = {
  Mutation: {
    makeReview: async (_: any, { reviewInput }: any) => {
      try {
        const game = await Game.findById(reviewInput.gameId);
        const user = await User.findById(reviewInput.userId);

        if (!game) {
          throw new Error("Game not found.");
        }

        if (!user) {
          throw new Error("User not found.");
        }

        const review = await Review.create({
          game: game._id,
          user: user._id,
          rating: reviewInput.rating,
          comment: reviewInput.comment,
        });

        // Update game's reviews array
        game.reviews.push(review._id);
        await game.save();

        return review;
      } catch (err) {
        throw err;
      }
    },
  },
  Query: {
    reviews: async (_: any) => {
      try {
        const reviews = await Review.find()
          .populate({
            path: "user",
            select: "name email",
          })
          .populate({
            path: "game",
            select: "title",
          });
        if (!reviews) {
          throw new Error("Error fetching reviews");
        }
        return reviews;
      } catch (err) {
        throw err;
      }
    },
  },
};

export default reviewResolvers;
