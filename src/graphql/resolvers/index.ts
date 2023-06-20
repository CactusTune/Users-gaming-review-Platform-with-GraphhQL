import authResolvers from "./auth.resolver";
import gameResolvers from "./game.resolver";
import reviewResolvers from "./review.resolver";

const rootResolver = [authResolvers, gameResolvers, reviewResolvers] as any;

export default rootResolver;
