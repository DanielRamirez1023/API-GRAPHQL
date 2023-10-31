import { v4 as uuidv4 } from "uuid";
import medicine from "../models/medicine.js";

export default {
  Query: {
    medicineCount: async () => await medicine.count(),
    ListMedicines: async () => await medicine.find(),
  },
  Mutation: {
    createMedicine: async (_, { name, laboratory, description, pharmacy, amount }) => {
      const itemMedicine = new medicine({ _id: uuidv4(), name, laboratory, description, pharmacy, amount });

      const medicineSave = await itemMedicine.save();
      return medicineSave;
    },
    deleteMedicine: async (_, { _id }) => {
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
  },
};
