import mongoose from "mongoose";

// estructura que tendra cada medicina
const MedicineSchema = new mongoose.Schema(
  {
    _id: String,
    name: String,
    laboratory: String,
    description: String,
    pharmacy: String,
    status: {
      type: String,
      default: "SIN_REVISAR",
      enum: ["SIN_REVISAR", "PENDIENTE", "COMPLETADO"],
    },
    amount: Number,
  },
  {
    timestamps: true,
  }
);

// definimos  el modelo de datos con su estructura (missings seria la coleccion)
export default mongoose.model("missings", MedicineSchema);
