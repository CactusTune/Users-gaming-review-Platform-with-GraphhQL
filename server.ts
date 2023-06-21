import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./src/graphql/typeDefs";
import rootResolver from "./src/graphql/resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers: rootResolver,
  context: ({ req }) => ({ req }),
});

export default server;
