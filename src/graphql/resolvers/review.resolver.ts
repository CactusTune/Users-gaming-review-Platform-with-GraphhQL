import Review from "../../models/review.model";
import Game from "../../models/game.model";
import User from "../../models/user.model";

const reviewResolvers = {
    Mutation: {
        createReview: async (_:any, { reviewInput }:any) => {
            try {
              const game = await Game.findById(reviewInput.gameId);
              const user = await User.findById(reviewInput.userId);
      
              if (!game) {
                throw new Error('Game not found.');
              }
      
              if (!user) {
                throw new Error('User not found.');
              }
      
              const review = await Review.create({
                game: game._id,
                user: user._id,
                rating: reviewInput.rating,
                comment: reviewInput.comment,
              });
      
            //   // Update game's reviews array
            //   game. .push(review);
            //   await game.save();
      
            //   // Update user's reviews array
            //   user.reviews.push(review);
            //   await user.save();
      
              return review;
            } catch (err) {
              throw err;
            }
          },
    },

    Query: {
        games: async (_: any) => {
            try {
              const games = await Game.find();
              if (!games) {
                throw new Error('Erro fetching games');
            }
              return games;
            } catch (err) {
              throw err;
            }
        }
    }
};
  
export default reviewResolvers;