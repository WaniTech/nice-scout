const { createApp } = require('./app');
const { defaultStore } = require('./services/defaultStore');

const PORT = process.env.PORT || 5000;
const app = createApp({ store: defaultStore });

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Scout Link Player API running on port ${PORT}`);
  });
}

module.exports = {
  app,
};
