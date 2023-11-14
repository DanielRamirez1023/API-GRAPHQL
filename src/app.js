import { ApolloServer } from "@apollo/server";
import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import http from "http";
import { verifyToken } from "./auth/verify-token.js";
import jwt from "jsonwebtoken";
import user from "./models/user.js";
// import { authenticate } from "./middlewares/auth.js";

export async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  // app.use(authenticate);

  app.use(
    "/graphql",
    cors(),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req, res }) => {
        // obtengo el token de la cabezera de la peticion
        const token = req.headers["authorization"]?.split(" ")[1];

        // decodifico el token para obtener los datos del usuario
        if (!token) {
          res.status(401).json({ message: "no se ha enviado el token" });
        }

        return { userToken: verifyToken(token) };
      },
    })
  );

  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));

  console.log(`🚀 Server ready at http://localhost:4000/graphql`);
}
