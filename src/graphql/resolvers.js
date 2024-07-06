import { v4 as uuidv4 } from "uuid";
import medicine from "../models/medicine.js";
import user from "../models/user.js";
import jwt from "jsonwebtoken";
import { sendEmail } from "../configSendEmails.js";
export default {
  Query: {
    medicineCount: async () => await medicine.count(),
    ListMedicines: async () => await medicine.find(),
    ListUsers: async () => await user.find(),
  },
  Mutation: {
    createMedicine: async (_, { name, laboratory, description, pharmacy, amount, status }) => {
      const itemMedicine = new medicine({ _id: uuidv4(), name, laboratory, description, pharmacy, amount, status });

      const medicineSave = await itemMedicine.save();

      const userName = "Dani Regente";

      sendEmail(pharmacy, userName);
      return medicineSave;
    },
    deleteMedicine: async (_, { _id }, { userToken }) => {
      if (userToken.role !== "Admin") throw new Error("No tienes permisos para eliminar usuarios");
      const deleteMedicine = await medicine.findByIdAndDelete(_id);

      if (!deleteMedicine) throw new Error("Faltante no encontrado");
      return deleteMedicine;
    },
    updateMedicine: async (_, args) => {
      const updateMedicine = await medicine.findByIdAndUpdate(args._id, args, {
        new: true,
      });

      if (!updateMedicine) throw new Error("Faltante no encontrado");
      return updateMedicine;
    },
    createUser: async (_, { name, email, password, role }, { userToken }) => {
      if (userToken.role !== "Admin") throw new Error("No tienes permisos para crear usuarios");
      const userExist = await user.findOne({ email });

      if (userExist) throw new Error("El usuario ya existe");

      const roleValid = ["Admin", "Regente"];

      if (!roleValid.includes(role)) throw new Error("El rol no es valido");

      const itemUser = new user({ _id: uuidv4(), name, email, password, role });

      const userSave = await itemUser.save();
      return userSave;
    },
    login: async (_, { email, password }) => {
      const userLogin = await user.findOne({ email, password });

      if (!userLogin) throw new Error("Usuario o contraseña incorrectos");

      const token = jwt.sign(
        { _id: userLogin._id, name: userLogin.name, email: userLogin.email, role: userLogin.role },
        "pharmaSolvekey",
        {
          expiresIn: "1d",
        }
      );

      return { user: userLogin, token };
    },
  },
};
