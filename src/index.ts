import express, {
  NextFunction,
  Response,
  Request,
  request,
  response,
} from "express";
import { connectToMongo } from "./Utils/db";
import authenticateToken from "./middleware/isAuth";
import limiter from "./Utils/rateLimit";
import dotenv from "dotenv";
import server from "./server";

async function bootstrap() {
  const app = express();

  dotenv.config();

  app.use(authenticateToken);

  app.use(limiter);

  server;

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
