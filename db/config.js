const { config } = require("../config/config");

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
const dialect = "postgres";

module.exports = {
    development: {
        url: URI,
        dialect
    },
    production: {
        url: URI,
        dialect,
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false
            }
        }
    }
};
