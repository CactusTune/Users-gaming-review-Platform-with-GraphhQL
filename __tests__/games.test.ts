import server from "../src/server";
import { gql } from "apollo-server-express";

it("should validate the game input correctly", async () => {
  const result = await server.executeOperation({
    query: gql`
      mutation {
        createGame(
          game: {
            title: "Call of Duty"
            description: "Best game in the world"
            genre: "Adventure"
          }
        )
      }
    `,
  });
  expect(result).toBeTruthy();
  expect(result.errors).toBeTruthy();
});
