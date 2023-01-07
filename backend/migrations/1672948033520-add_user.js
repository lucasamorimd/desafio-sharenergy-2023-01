const User = require("./models/User");
const uuid = require("crypto");

/**
 *
 * Make any changes you need to make to the database here
 */
async function up() {
  const date = new Date();
  // Write migration here
  await User.create({
    id: uuid.randomUUID(),
    userName: "desafiosharenergy",
    name: "Sharenergy User",
    email: "desafiosharenergy@email.com",
    password: "sh@r3n3rgy",
    created_at: {
      day: date.getDay(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
      hour: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
    },
  });
}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
async function down() {
  // Write migration here
}

module.exports = { up, down };
