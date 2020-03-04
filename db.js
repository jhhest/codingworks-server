const Sequelize = require("sequelize");

const databaseUrl =
  process.env.DATABASE_URL ||
  "postgres://postgres:password@localhost:5432/postgres";

const db = new Sequelize(databaseUrl);

db.sync({ force: true }).then(() => {
  console.log(`\n---\n Database is connected \n---\n`);
});

module.exports = db;
