const Sequelize = require("sequelize")

require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS,{
    host: "localhost",
    dialect: "mysql"
})

// const testConnection = async () => {
	//	try {
	//	  await sequelize.authenticate();
	//	  console.log('Connection has been established successfully.');
	//	} catch (error) {
	//	  console.error('Unable to connect to the database:', error);
	//	}
// }

// testConnection();

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}