const db = require("../db");
const Sequelize = require("sequelize");

const Technology = db.define("technologies", {
    name: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

module.exports = Technology;
