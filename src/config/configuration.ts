export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    username: process.env.DATABASE_USER_NAME || 'postgres',
    database_name: process.env.DATABASE_DB_NAME || 'postgres',
    password: process.env.DATABASE_DB_PASSWORD || 'postgrespassword',
  },
  jwtSecretToken: 'jwtSecrettttttt',
});
