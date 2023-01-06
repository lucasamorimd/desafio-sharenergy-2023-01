const Client = require("./models/Cliente");
const uuid = require("crypto");
const moment = require("moment");
const dotenv = require("dotenv");
dotenv.config();
moment.locale(process.env.LOCALE);
/**
 * Make any changes you need to make to the database here
 */
async function up() {
  let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  let clients = [];
  list.map((item) => {
    clients.push({
      id: uuid.randomUUID(),
      name: `Teste Fulano ${item}`,
      email: `email_teste_${item}@email.com`,
      telephone: "321654987",
      address: `Endereço ${item}`,
      document: `doc-${item}`,
      created_at: moment().format("L LTS"),
    });
  });
  await Client.create(clients);
}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
async function down() {
  // Write migration here
}

module.exports = { up, down };
