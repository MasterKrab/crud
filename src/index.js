const log = require('pino')();
const app = require('fastify')({ logger: log });
require('dotenv').config();
require('./mongo');

const { PORT, ORIGIN_URL } = process.env;

app.register(require('fastify-swagger'), require('./config/swagger'));

app.register(require('fastify-cors'), {
  origin: ORIGIN_URL,
});

app.register(require('./routes/notes'));

app.setNotFoundHandler((req, res) => {
  res.code(404).send({
    statusCode: false,
    error: 'Not Found',
  });
});

app
  .listen(PORT)
  .then((adress) => console.log(`Server listening on ${adress}`))
  .catch((error) => {
    app.log.error(error);
    process.exit(1);
  });
