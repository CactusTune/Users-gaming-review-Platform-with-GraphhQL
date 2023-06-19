import authResolvers from "./auth.resolver";
import gameResolvers from "./game.resolver";
import reviewResolvers from "./review.resolver";

const rootResolver = [authResolvers, gameResolvers, reviewResolvers] as const;

export default rootResolver;
