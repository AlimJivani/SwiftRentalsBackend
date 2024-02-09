// src/models/UserModel.js
import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  dob: { type: Date, required: true },
  role: { type: String, required: true },
  isConfirmed: { type: Boolean, required: true, default: false },
  resetToken: { type: String },
  resetTokenExpiry: { type: Date },
  createdAt: { type: Date, default: Date.now }
});

const User = model("User", UserSchema);

export default User;
