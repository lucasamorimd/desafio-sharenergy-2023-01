const mongoose = require("mongoose");
const Client = require("./client.model");
mongoose.set("strictQuery", false);
console.log("conectando");
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
console.log("conectou!");
module.exports = Client;
