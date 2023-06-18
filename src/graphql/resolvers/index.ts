import authResolvers from "./auth.resolver";
import gameResolvers from "./game.resolver";

const rootResolver = {
    ...authResolvers,
    ...gameResolvers
}

export default rootResolver