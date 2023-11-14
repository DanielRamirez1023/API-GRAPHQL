import jwt from "jsonwebtoken";
import user from "../models/user.js";

export const authenticate = async (req, res) => {
  // obtengo el token de la cabezera de la peticion
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "no se ha enviado el token" });
  }

  // decodifico el token para obtener los datos del usuario
  const decoded = jwt.verify(token, "pharmaSolvekey");

  const validateUser = user.findById(decoded._id);

  if (!validateUser) {
    res.status(401).json({ message: "usuario no encontrado" });
  }
  next();
};
