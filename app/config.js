const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
module.exports = {
    rootPath:path.resolve(__dirname,'..'),
    dbHost: process.env.MYSQL_HOST,
    dbPort: process.env.MYSQL_PORT,
    dbUser: process.env.MYSQL_USER,
    dbPass: process.env.MYSQL_PASSWORD,
    dbName: process.env.MYSQL_DBNAME,
}