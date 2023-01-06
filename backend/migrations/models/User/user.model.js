const mongoose = require("mongoose");
const { Schema } = mongoose;
const { connection } = mongoose;
const { model } = mongoose;
const UserSchema = new Schema({
  id: { type: String, required: true },
  userName: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  created_at: { type: String, required: true },
});
module.exports = connection.model.User || model("User", UserSchema);
