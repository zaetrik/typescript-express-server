# Typescript-Express-Server - Basic Starter Template

[![Pipeline Status](https://gitlab.com/Cedomic/typescript-express-server/badges/master/pipeline.svg)](https://gitlab.com/Cedomic/typescript-express-server/pipelines/latest)

This is a basic starter template for an Express.js server with a Postgres database written in TypeScript.

## Usage

Clone the repository and run `tsc --build && docker-compose -f docker-compose.dev.yml up`. The server is reachable at `http://localhost:3003/api`.

## Architecture

The server uses a 3-layer architecture + an extra Pub/Sub Layer (Controller Layer, Service Layer, Data Access Layer, Pub/Sub Layer).

### Controller Layer - /controllers

All routes are defined in the controller layer. No business logic should be included in this layer. Instead you should use the service layer for all business logic related actions.

### Service Layer - /services

This layer includes all business logic. The service layer is also the only layer that uses the data access layer.

### Data Access Layer - /repository

In this layer you define all logic related to data access (e.g. logic to query from your data source). Current data source is a Postgres database.

### Pub/Sub Layer - /subscribers

Handles third-party calls (e.g. send email on user sign up or send data to analytics service). Service layer emits an event and the subscribers listen for the event and handle it.

## Other

### Config - /config

Here you can adjust your config settings.

### Setup - /setup

This directory includes all files related to the setup.

### Tests - /tests

Here you store all your tests, seperated in integration-tests and unit-tests. Tests are written with Jest.

### Types - /types

Custom types are stored here.

### GitLab CI

A basic GitLab CI pipeline setup is included. Currently the pipeline executes all tests.

### Docker

Example Docker Compose files are included for the development, test & production environment.

## Technologies

TypeScript, Node.js, Postgres & Express.js
