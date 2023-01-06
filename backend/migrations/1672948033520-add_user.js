const User = require("./models");
/**
 *
 * Make any changes you need to make to the database here
 */
async function up() {
  // Write migration here
  console.log(User);
  await User.create({
    id: "asdf-3206-fdsa8-asdf",
    userName: "desafiosharenergy",
    name: "Sharenergy User",
    email: "desafiosharenergy@email.com",
    password: "sh@r3n3rgy",
  });
}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
async function down() {
  // Write migration here
}

module.exports = { up, down };
