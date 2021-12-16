# FST Pokemontcg server

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

## Services in docker-compose files

#### Production
`./docker-compose-files/docker-compose.prod.yml`

Services:
- PokemonTCG server with client SPA
- postgres
- redis
- Hasura GUI (graphql-engine)


#### Dev
`./docker-compose-files/docker-compose.dev.yml`

Services:
- postgres
- redis
- Hasura GUI (graphql-engine)


## Building and running with Docker

```sh
$ cp ./docker-compose-files/docker-compose.prod.yml docker-compose.yml

# docker-compose.prod.yml would load the .env.prod in ./configs/

$ docker-compose up

# the server with front-end SPA is running default on the localhost:3000
```
After builded server container success:

![build](https://user-images.githubusercontent.com/6461602/146146994-1e7a8031-662f-4c3c-b565-64e9e63d3444.png)

You can see the home page in `localhost:3000`

![Query](https://user-images.githubusercontent.com/6461602/146149179-d3fe91c6-b0a4-42e7-b339-558e82904f83.png)

## Development

```sh
$ cp ./docker-compose-files/docker-compose.dev.yml docker-compose.yml
```

The `docker-compose.yml` just running the Postgres/Redis stack, without the `pokemontcg-node-docker` container


#### Installation

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
