export default {
  database: {
    host: process.env.HOST,
    port: parseInt(process.env.PG_PORT),
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    entities: __dirname + '/../**/*.entity.{js,ts}',
    migrations: __dirname + '/../database/migrations/*.{ts,js}',
  },
};
