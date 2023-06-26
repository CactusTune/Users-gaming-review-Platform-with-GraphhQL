import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./graphql/typeDefs";
import rootResolver from "./graphql/resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers: rootResolver,
  context: ({ req }) => ({ req }),
});

export default server;
