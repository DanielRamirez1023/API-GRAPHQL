import { medicines } from "./data.js";

export default {
  Query: {
    medicineCount: () => medicines.length,
    medicines: () => medicines,
  },
};
