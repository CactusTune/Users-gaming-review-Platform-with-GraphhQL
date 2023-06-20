import joi from "joi";
import { join } from "path";
import { Types } from "mongoose";

const userInputSchema = joi.object({
  name: joi.string().min(4).max(25).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});

const loginInputSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

const createGameInputSchema = joi.object({
  title: joi.string().required(),
  description: joi
    .string()
    .allow("")
    .pattern(/^[a-zA-Z0-9\s]*$/)
    .required(),
  genre: joi.string().required(),
});

const makeReviewInputSchema = joi.object({
  gameId: joi.string().custom((game, helpers) => {
    if (!Types.ObjectId.isValid(game)) {
      return helpers.error("invalid game id");
    }
    return game;
  }),
  userId: joi.string().custom((user, helpers) => {
    if (!Types.ObjectId.isValid(user)) {
      return helpers.error("invalid user id");
    }
    return user;
  }),
  rating: joi.number().required(),
  comment: joi.string(),
});

export const validateUserInput = (userInput: any) => {
  const { error, value } = userInputSchema.validate(userInput);
  if (error) {
    throw new Error("Invalid User input");
  }
  return value;
};

export const validateLoginInput = (loginInput: any) => {
  const { error, value } = loginInputSchema.validate(loginInput);
  if (error) {
    throw new Error("Invalid Login credentials");
  }
  return value;
};

export const validateGameInput = (gameInput: any) => {
  const { error, value } = createGameInputSchema.validate(gameInput);
  if (error) {
    throw new Error("Invalid Game Input");
  }
  return value;
};

export const validateReviewInput = (reviewInput: any) => {
  const { error, value } = makeReviewInputSchema.validate(reviewInput);
  if (error) {
    throw new Error("Invalid Review Input");
  }
  return value;
};
