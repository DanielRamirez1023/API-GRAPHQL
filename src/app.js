import { ApolloServer } from "@apollo/server";
import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import http from "http";
import { verifyToken } from "./auth/verify-token.js";

export async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  // no devolver respuestas al cliente en un middleware
  app.use(
    "/graphql",
    cors(),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req }) => {
        try {
          // obtengo el token de la cabezera de la peticion
          const data = req.headers.authorization || "";
          const token = data.replace("Bearer ", "");

          const userToken = verifyToken(token);

          if (!userToken) {
            return { userToken: null };
          }

          return { userToken };
        } catch (error) {
          console.log(error);
        }
      },
    })
  );

  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));

  console.log(`🚀 Server ready at http://localhost:4000/graphql`);
}
