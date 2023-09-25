import mongoose from "mongoose";

// estructura que tendra cada medicina
const MedicineSchema = new mongoose.Schema(
  {
    _id: String,
    name: String,
    laboratory: String,
    description: String,
    pharmacy: String,
    amount: Number,
  },
  {
    timestamps: true,
  }
);

// definimos  el modelo de datos con su estructura (missings seria la coleccion)
export default mongoose.model("missings", MedicineSchema);
