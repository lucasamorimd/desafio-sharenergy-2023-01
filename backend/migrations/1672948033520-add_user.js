const User = require("./models/User");
const uuid = require("crypto");
const moment = require("moment");
const dotenv = require("dotenv");
dotenv.config();
moment.locale(process.env.LOCALE);
/**
 *
 * Make any changes you need to make to the database here
 */
async function up() {
  // Write migration here
  await User.create({
    id: uuid.randomUUID(),
    userName: "desafiosharenergy",
    name: "Sharenergy User",
    email: "desafiosharenergy@email.com",
    password: "sh@r3n3rgy",
    created_at: moment().format("L LTS"),
  });
}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
async function down() {
  // Write migration here
}

module.exports = { up, down };
