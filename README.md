# FST Pokemontcg server

## Description

FST Pokemontcg server using the
[NestJS](https://github.com/nestjs/nest) as the server framework.

## Front-end bundle

The front-end part - a react SPA builded bundle is placed in the directory `./client/`

The source of the FST PokemonTCG front-end SPA:
[FST-PokemonTCG-SPA](https://github.com/veritymissed/FST-PokemonTCG-SPA)

```sh
# Copy the front-end SPA builded bundle into ./client/
$ cp -r ${FST-PokemonTCG-SPA-DIR}/build/* ${FST-PokemonTCG-server-DIR}/client/
```

## Building and running with Docker

```sh
$ docker-compose up -d (daemon)

# the server with front-end SPA is running default on the localhost:3000
```

## Installation

```bash
$ npm install

# or

$ yarn
```

## Running the app

```bash
# watch mode
$ npm run start:dev
#or
$ yarn run start:dev
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
