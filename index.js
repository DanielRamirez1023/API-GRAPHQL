import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { medicines } from "./data.js";
import { typeDefs } from "./structure-graphql.js";

const resolvers = {
  Query: {
    medicineCount: () => medicines.length,
    medicines: () => medicines,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
