// database parameters
export const dbSettings = {
  dbParameters: () => ({
    user: process.env.DB_USERNAME || "user",
    host: process.env.DB_HOST || "localhost",
    database: process.env.DB_NAME || "example",
    password: process.env.DB_PASSWORD || "password",
    port: Number(process.env.DB_PORT) || 5432
  })
};

// server parameters
export const serverSettings = {
  port: Number(process.env.PORT) || 3003
};
