import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Game {
    _id: ID!
    title: String!
    description: String!
    genre: String!
    reviews: [Review!]!
  }

  type Review {
    _id: ID!
    game: Game!
    user: User!
    rating: Float!
    comment: String!
  }

  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
    reviews: [Review!]!
  }

  type AuthData {
    name: String!
  }

  input UserInput {
    name: String!
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input GameInput {
    title: String!
    description: String!
    genre: String!
  }

  input ReviewInput {
    gameId: ID!
    userId: ID!
    rating: Float!
    comment: String!
  }

  type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }

  type Query {
    games: [Game!]!
    reviews: [Review!]!
    user(loginInput: LoginInput): AuthData!
    login(loginInput: LoginInput): AuthData!
  }

  type Mutation {
    makeReview(reviewInput: ReviewInput): Review!
    createUser(userInput: UserInput): User
    createGame(gameInput: GameInput): Game
  }
`;
