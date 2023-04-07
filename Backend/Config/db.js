
const Sequelize = require("sequelize");

const connection = new Sequelize("sequelizetest", "root", "thegameison@257", {
    host: "localhost",
    dialect: "mysql",
});

module.exports = { connection };