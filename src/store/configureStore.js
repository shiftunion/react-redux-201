if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}

//**Note**: Dynamic imports are not supported by ES6 right now, hence the use of require
