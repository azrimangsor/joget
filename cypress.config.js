const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    username: 'cat',
    password: 'password'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation: false
  }
});
