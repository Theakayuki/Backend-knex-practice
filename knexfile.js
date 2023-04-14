const path = require('path');
require('dotenv').config();
const { DB_URL } = process.env;


module.exports = {
  client: "postgresql",
  connection: DB_URL,
  migrations: {
    directory: path.join(__dirname, 'src', 'db', 'migrations'),
  },
  };