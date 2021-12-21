# Mortgage Calculator Application

The following repo is a sample application used for calculator a mortgage based on a simple mortgage formula

# NX Workspace Configuration

The following sample application is built using a NX monorepo and includes the following structure

## Applications

The following is a list of applications

### calculator-api

This is a NEST JS Application which serves of key APIs used for supporting the calculator app

### calculator-ui

This is an Angular Application which serves the UI and connects to the calculator api to provide the mortgage calculator functionality

### calculator-ui-react
This is a React Application which serves the UI and connects to teh calculator api to provide the mortgage application

## Shared Libraries

The following is a summary of shared library within the mortgage calculator monorepo:

### Models

A typescript library containing all the shared data models used across the application

## Calculator Service

This is a Nest JS Shared module that contains a list of shared services used by the calculator service

# Installation and Setup

To run the install the application

```
npm install
```

To run the Calculator-UI Application

```
npm run start calculator-ui
```

To run the Calculator-UI-React Application

```
npm run start calculator-ui-react
```

To run the Calculator-API

```
npm run start calculator-api
```

TODO:

1. How to run all the apps
2. Recommended Watchers turned on during development (linting and tests)

# Testing and Linting

Note: The project is setup to use Husky and will run lint and all affected tests on commit.

The following is the command to run all the tests

```
nx run-many --all --target=test
```

The following command is to run linting on the whole project

```
nx run-many --all --target=lint
```

## Integration Tests

### Calculator API Integration Tests

The Calculator API relies on a Postman Collection and Environment file and will use postman's newman cli tool to execute the script. To run the tests you need to do the following:

1. Start the Calculator API

```
npm run start calculator-api
```

2. Run the newman tests from the command line
   Open another terminal window and run the following:

```
npm run test:integration:calculator-api
```

# Documentation

There is some supporting documentation that maybe useful:

## NX Helper Commands

A list of common NX Commands for development:

[NX Helper](docs/NX-HELPER-COMMANDS.md)

## Git Helper

A list of common git commands used during development:
[GIT Helper](docs/GIT-HELPER-COMMANDS.md)

# TO Do list

There is a small TODO file that is being used:
[TODO](docs/TODO.md)

There is also a project tracked in github

https://github.com/shannonlal/mortgage-calculator/projects/1
