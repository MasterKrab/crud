const { connect } = require('mongoose');
require('dotenv').config();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
};

connect(process.env.MONGODB_URI, options)
  .then(() => console.log('Database connected'))
  .catch((error) => console.error(error));
