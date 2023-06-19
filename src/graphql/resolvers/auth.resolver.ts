import bcrypt from "bcrypt";
import User from "../../models/user.model";
import JwtToken from "../../Utils/jwt";

const authResolvers = {
  Mutation: {
    createUser: async (_: any, { userInput }: any) => {
      try {
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
    login: async (_: any, { loginInput }: any) => {
      const user = await User.findOne({ email: loginInput.email });
      if (!user) {
        throw new Error("Invalid email or password");
      }

      const isMatch = await bcrypt.compare(loginInput.password, user.password);
      if (!isMatch) {
        throw new Error("Invalid email or password");
      }
      return user;
    },
  },
  Query: {
    user: async (_: any, { userId }: any) => {
      try {
        const user = await User.findById(userId);
        if (!user) {
          throw new Error("User not found.");
        }

        return user;
      } catch (err) {
        throw err;
      }
    },
  },
};

export default authResolvers;
