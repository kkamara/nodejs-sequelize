# ecommerce

Nodejs, Mysql, Redis, Selenium.

## To run locally

Have [docker](https://docs.docker.com/engine/install/) & [docker-compose](https://docs.docker.com/compose/install/) installed on your operating system.

```bash
cp .env.example .env && docker-compose up --build -d
```

## To run browser tests

```bash
npm run test
```

View browser test code: [/blob/main/tests/main_test.go](https://github.com/kkamara/node-react-boilerplate/blob/main/test_setup.js)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[BSD](https://opensource.org/licenses/BSD-3-Clause)
