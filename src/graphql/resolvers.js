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
  },
};
