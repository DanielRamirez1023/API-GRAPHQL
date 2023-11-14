import jwt from "jsonwebtoken";
import user from "../models/user.js";

export const verifyToken = (token) => {
  // decodifico el token para obtener los datos del usuario
  const decoded = jwt.verify(token, "pharmaSolvekey");

  // valido que el usuario exista en la base de datos
  const validateUser = user.findById(decoded._id);

  //   si el usuario no existe retorno undefined
  if (!validateUser) {
    return undefined;
  }

  //   si el usuario existe retorno los datos del usuario
  return decoded;
};
