import server from "../src/server";
import { gql } from "apollo-server-express";

it("should validate the user reviews", async () => {
  const result = await server.executeOperation({
    query: gql`
      mutation {
        makeReview(
          review: {
            gameId: "648fa6fc9ceaddbeaa273cd5"
            userId: "648fb62b0b58d637aa5b45e3"
            rating: 5
            comment: "I love this game"
          }
        )
      }
    `,
  });
  expect(result).toBeTruthy();
  expect(result.errors).toBeTruthy();
});
