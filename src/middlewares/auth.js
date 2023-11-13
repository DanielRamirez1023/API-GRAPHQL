import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
  try {
    // obtengo el token de la cabezera de la peticion
    const token = req.headers["authorization"]?.split(" ")[1];

    // decodifico el token para obtener los datos del usuario
    const decoded = jwt.verify(token, "pharmaSolvekey");

    next();
  } catch (error) {
    console.log(error);
    next();
  }
};
