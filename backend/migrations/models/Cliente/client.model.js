const mongoose = require("mongoose");
const { Schema } = mongoose;
const { connection } = mongoose;
const { model } = mongoose;
const ClientSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  telephone: { type: String, required: true },
  address: { type: String, required: true },
  document: { type: String, required: true },
  created_at: { type: String, required: true },
});
module.exports = connection.model.Client || model("Client", ClientSchema);
