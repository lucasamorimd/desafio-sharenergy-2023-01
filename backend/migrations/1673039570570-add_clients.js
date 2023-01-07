const Client = require("./models/Cliente");
const uuid = require("crypto");
/**
 * Make any changes you need to make to the database here
 */
async function up() {
  let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  let clients = [];
  list.map((item) => {
    const date = new Date();
    clients.push({
      id: uuid.randomUUID(),
      name: `Teste Fulano ${item}`,
      email: `email_teste_${item}@email.com`,
      telephone: "321654987",
      address: `Endereço ${item}`,
      document: `doc-${item}`,
      created_at: {
        day: date.getUTCDay(),
        month: date.getUTCMonth() + 1,
        year: date.getUTCFullYear(),
        hour: date.getUTCHours(),
        minutes: date.getUTCMinutes(),
        seconds: date.getUTCSeconds(),
      },
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
