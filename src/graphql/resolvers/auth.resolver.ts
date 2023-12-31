import bcrypt from "bcrypt";
import User from "../../models/user.model";
import JwtToken from "../../Utils/jwt";
import { IResolvers } from "graphql-tools";
import {
  validateUserInput,
  validateLoginInput,
} from "../../Utils/inputValidation";

const authResolvers: IResolvers = {
  Mutation: {
    createUser: async (_: any, { userInput }: any) => {
      try {
        validateUserInput(userInput);
        const existingUser = await User.findOne({ email: userInput.email });
        if (existingUser) {
          throw new Error("User exists already.");
        }

        const hashedPassword = await bcrypt.hash(userInput.password, 10);

        const user = new User({
          name: userInput.name,
          email: userInput.email,
          password: hashedPassword,
        });

        const result = user.save();

        return result;
      } catch (err) {
        throw err;
      }
    },
  },
  Query: {
    users: async (_: any) => {
      try {
        const users = await User.find();
        if (!users) {
          throw new Error("User not found.");
        }
        return users;
      } catch (err) {
        throw err;
      }
    },
    login: async (_: any, { loginInput }: any) => {
      try {
        validateLoginInput(loginInput);
        const user = await User.findOne({ email: loginInput.email });

        if (!user) {
          throw new Error("Invalid email or password");
        }

        const isMatch = await bcrypt.compare(
          loginInput.password,
          user.password
        );

        if (!isMatch) {
          throw new Error("Invalid email or password");
        }

        const jwtToken = new JwtToken(process.env.JWT_SECRET);

        const token = jwtToken.generateToken(user._id);

        return { userId: user._id, token: token, tokenExpiration: 1 };
      } catch (err) {
        throw err;
      }
    },
  },
};

export default authResolvers;
