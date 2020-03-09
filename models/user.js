const db = require("../db");
const Sequelize = require("sequelize");

const User = db.define("user", {
    firstName: { 
        type: Sequelize.TEXT,
        allowNull: false
    },
    lastName: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    telephoneNumber: {
        type: Sequelize.INTEGER,
        allowNull: false
    }, 
    email: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
    }, 
    dateOfBirth: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }, 
    city: {
        type: Sequelize.TEXT,
        allowNull: false
    }, 
    password: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});


module.exports = User;
