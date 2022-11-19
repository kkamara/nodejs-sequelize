# nodejs-sequelize

Nodejs with sequelize.

## Installation

* [Node.js](https://nodejs.org/en/)
* [pNpM](https://pnpm.io/)

```bash
  cp .env.example .env
  pnpm install
```

## Usage

```bash
  node src/index.js
```

## Using docker?

Have [docker](https://docs.docker.com/engine/install/) & [docker-compose](https://docs.docker.com/compose/install/) installed on your operating system.

```bash
  docker-compose up --build -d
```

## To run browser tests with gui

```bash
  pnpm run test
```

View browser test code: [/blob/main/tests/](https://github.com/kkamara/node-react-boilerplate/blob/main/tests/).

## To parallel test

[link](https://nightwatchjs.org/v09/guide#parallel-running).

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[BSD](https://opensource.org/licenses/BSD-3-Clause)
