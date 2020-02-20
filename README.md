# Typescript-Express-Server - Basic Starter Template

This is a basic starter template for a Express server with TypeScript. It includes seperate API routes in /api-Folder and a repository plus database config in /repository & /config

## Database Config

Edit the config.ts file in /config and add the configuration object for your database connection.

Edit the database.ts file in /config to connect to your database and return the database connection in with resolve(). Here you have to import the library for your database (e.g. MongoDB client, ElasticSearch client, CouchDB client, Postgres client etc.).

You also have to adjust the "YourDatabaseConnection" type tp match the one of your current database connection.

## Repository Config

You have to adjust the "Repository" type in the /types folder whenever you add a method to the repository function in the repository.ts file in the /repository folder. You can find an example with "getCount"

## Further Configs

Please look at the docker-compose files. Here the database container should be added (e.g. your ElasticSearch container or your Postgres container).

Also look at the gitlab-ci file. Here you have to add the environment variables for the remote server and the ssh secret key to the repository. You also have to adjust the "directory-name" to be more meaningful.

## API routes

In the server.ts file you can register additional API routes. In the api.ts file in the /api folder you can add additional routes.

## Repository

In the repository.ts file in the /repository folder you can add additional methods that access the database to the repository function.

## Logging

There is a logger in /utils/logger. It logs to files in the /logs folder and when NODE_ENV === "development" it also logs to console.

    import logger from "../utils/logger"

    logger.log("error", err, { addtionalContent: "extra info" })
    logger.log("info", info, { addtionalContent: "extra info" })
