# nodejs-sequelize

Nodejs with sequelize orm.

## Installation

* [Node.js](https://nodejs.org/en/)
* [pNpM](https://pnpm.io/)

Update the database connection details in [./src/util/database.js](https://github.com/kkamara/nodejs-sequelize/raw/main/src/util/database.js)

```js
  const sequelize = new Sequelize(
    'nodejs_sequelize',
    'root',
    'secret',
    { dialect: 'mysql', host: 'localhost', port: 3306, },
  )
```

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

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[BSD](https://opensource.org/licenses/BSD-3-Clause)
