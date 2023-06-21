import Game from "../../models/game.model";
import { IResolvers } from "graphql-tools";
import { validateGameInput } from "../../Utils/inputValidation";

const gameResolvers: IResolvers<any, any> = {
  Mutation: {
    createGame: async (_: any, { gameInput }: any, { req }: any) => {
      try {
        if (!req.isAuth) {
          throw new Error("Unauthorized access. Please provide login.");
        }
        validateGameInput(gameInput);
        const existingGame = await Game.findOne({ title: gameInput.title });
        if (existingGame) {
          throw new Error("Game already exists.");
        }
        const game = await Game.create({
          title: gameInput.title,
          description: gameInput.description,
          genre: gameInput.genre,
        });
        return game;
      } catch (err) {
        throw err;
      }
    },
  },

  Query: {
    games: async (_: any) => {
      try {
        const games = await Game.find().populate({
          path: "reviews",
          select: "comment rating",
          populate: {
            path: "user",
            select: "name",
          },
        });
        if (!games) {
          throw new Error("Error fetching games");
        }
        return games || [];
      } catch (err) {
        throw err;
      }
    },
  },
};

export default gameResolvers;
