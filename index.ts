import express, {
  NextFunction,
  Response,
  Request,
  request,
  response,
} from "express";
import { ApolloServer } from "apollo-server-express";
import { connectToMongo } from "./src/Utils/db";
import { typeDefs } from "./src/graphql/typeDefs";
import rootResolver from "./src/graphql/resolvers";
import authenticateToken from "./src/middleware/isAuth";
import limiter from "./src/Utils/rateLimit";
import dotenv from "dotenv";

async function bootstrap() {
  const app = express();

  dotenv.config();

  app.use(authenticateToken);

  app.use(limiter);

  const server = new ApolloServer({
    typeDefs,
    resolvers: rootResolver,
    context: ({ req }) => ({ req }),
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
