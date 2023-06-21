import server from "../server";
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

// Assuming you have a mock review service object with the required methods

// Define the mockReviewService with the canned responses
const mockReviewService = {
  getReviews: () => [
    {
      comment: "I love this game",
      rating: 5,
      user: { name: "Mike Oviss" },
      game: { title: "Fifa 23" },
    },
    // Add more canned responses if needed
  ],
};

// Define the test case
const fetchReviewsTestCase = {
  id: "Fetch Reviews Test Case",
  query: `
      query {
        reviews {
          comment
          rating
          user {
            name
          }
          game {
            title
          }
        }
      }
    `,
  variables: {},
  context: { reviewService: mockReviewService },
  expected: {
    data: {
      reviews: [
        {
          comment: "I love this game",
          rating: 5,
          user: { name: "Mike Oviss" },
          game: { title: "Fifa 23" },
        },
        // Add more expected reviews if needed
      ],
    },
  },
};
