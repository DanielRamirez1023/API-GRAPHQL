import mongoose from "mongoose";

// estructura que tendra cada usuario
const UserSchema = new mongoose.Schema(
  {
    _id: String,
    name: String,
    email: String,
    password: {
      type: String,
      select: false,
    },
    role: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("users", UserSchema);
