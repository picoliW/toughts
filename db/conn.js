const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("toughts2", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Conectado ao banco");
} catch (err) {
  console.log(err);
}

module.exports = sequelize;
