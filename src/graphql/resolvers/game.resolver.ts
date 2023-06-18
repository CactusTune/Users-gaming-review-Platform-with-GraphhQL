import Game from "../../models/game.model";

const gameResolvers = {
    Mutation: {
      createGame: async (_:any, { gameInput }: any) => {
        try {
          const existingGame = await Game.findOne({ title: gameInput.title });
          if (existingGame) {
            throw new Error('Game already exists.');
          }
          const game = await Game.create({
            title: gameInput.title,
            description: gameInput.description,
            genre: gameInput.genre
          })
          return game ;
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
  
export default gameResolvers;