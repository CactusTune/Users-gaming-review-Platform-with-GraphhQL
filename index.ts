import express, { Request, Response, NextFunction } from "express";
import { ApolloServer } from "apollo-server-express";
import { connectToMongo } from "./src/Utils/db";
import { typeDefs } from "./src/graphql/typeDefs";
import rootResolver from "./src/graphql/resolvers";
import rateLimit from "express-rate-limit";
import jwt from "jsonwebtoken";

async function bootstrap() {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers: rootResolver,
  });

  await server.start();

  server.applyMiddleware({ app });

  app.listen({ port: 4040 }, () => {
    console.log(
      `App is listening on http://localhost:4040${server.graphqlPath}`
    );
  });

  connectToMongo();
}

bootstrap();
