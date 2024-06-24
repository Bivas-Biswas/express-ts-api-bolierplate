# Equalcollective Asli Backend

## Folder Structure

```
|-- config
|-- controllers       # all function logic goes here
|-- middleware        # all logic must run before the final logic
|-- routes            # define the routes
|-- service           # all controllers services like db calling function goes here
|-- utils             # all hepler or small reusable code comes here

```

<!-- TechStack -->
### Tech Stack

- ***Express.js***
- ***Typescript***
- ***pnpm***


<!-- Features -->
### Features

- ***Package managament*** with pnpm
- ***Testing*** with Jest and Supertest
- ***Cross-Origin Resource-Sharing*** enabled using cors
- ***Secured HTTP Headers*** using helmet
- ***Logging*** with winston
- ***Environment variables*** using dotenv
- ***Compression*** with gzip
- ***Git hooks*** with husky and lint-staged
- ***Linting and enforced code style*** using Eslint and Prettier
- ***Containerization*** with Docker


<!-- Env Variables -->
### Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NODE_ENV`

`PORT`

`CORS_ORIGIN`

See .env.example for further details

<!-- Getting Started -->
## Getting Started

<!-- Prerequisites -->
### Prerequisites

This project uses PNPM as package manager

```bash
 npm install --global pnpm
```

<!-- Installation -->
### Installation

```bash
  git clone https://github.com/equalcollective/equalcollective-asli-backend.git
```

Go to the project directory

```bash
  cd equalcollective-asli-backend
```

```bash
  pnpm install
```

### Linting

```bash
  # run ESLint
  pnpm lint
  
  # fix ESLint errors
  pnpm lint:fix

  # run prettier
  pnpm code:check

  # fix prettier errors
  pnpm code:format
  
  # fix prettier errors in specific file
  pnpm code:format:specific-file <file-name>
```
   
<!-- Running Tests -->
### Running Tests

To run tests, run the following command

```bash
  pnpm test
```

<!-- Run Locally -->
### Run Locally

Start the server in development mode

```bash
  pnpm dev
```

Start the server in production mode

```bash
  pnpm start
```

<!-- Run with Docker -->
### Run with Docker

Build the container

```bash
  cd express-ts-boilerplate
  docker build . -t express-ts-boilerplate     
```

Start the container

```bash
  docker run -p <port you want the container to run at>:4040 -d express-ts-boilerplate    
```
# express-ts-api-bolierplate
