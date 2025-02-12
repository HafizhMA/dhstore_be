require("dotenv").config();

module.exports = {
  development: {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  // test: {
  //   dialect: process.env.DATABASE_DIALECT,
  //   host: process.env.DATABASE_HOST,
  //   port: process.env.DATABASE_PORT,
  //   username: process.env.DATABASE_USERNAME,
  //   password: process.env.DATABASE_PASSWORD,
  //   database: process.env.DATABASE_NAME,
  // },
  // production: {
  //   dialect: process.env.DATABASE_DIALECT,
  //   host: process.env.DATABASE_HOST,
  //   port: process.env.DATABASE_PORT,
  //   username: process.env.DATABASE_USERNAME,
  //   password: process.env.DATABASE_PASSWORD,
  //   database: process.env.DATABASE_NAME,
  //   ...(process.env.DB_SSL && {
  //     dialectOptions: {
  //       ssl: {
  //         rejectUnauthorized: false, // very important
  //       },
  //     },
  //   }),
  // },
};
