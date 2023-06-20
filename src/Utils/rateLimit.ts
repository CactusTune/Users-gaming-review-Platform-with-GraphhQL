import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message:
    "You have exceeded your request limit for the current 15 minutes period, please try again later",
  standardHeaders: true,
  legacyHeaders: false,
});

export default limiter;
