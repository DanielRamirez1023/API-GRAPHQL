import { startApolloServer } from "./src/app.js";
import { typeDefs } from "./src/graphql/structure-graphql.js";
import resolvers from "./src/graphql/resolvers.js";
import { connectDB } from "./src/db.js";
import dotenv from "dotenv";

dotenv.config();
connectDB();

startApolloServer(typeDefs, resolvers);
