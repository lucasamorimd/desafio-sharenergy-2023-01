const mongoose = require("mongoose");
const User = require("./user.model");
mongoose.set("strictQuery", false);
console.log("conectando");
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
console.log("conectou!");
module.exports = User;
