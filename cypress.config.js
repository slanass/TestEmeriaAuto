const { defineConfig } = require('cypress')


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: true,
    json: false,
  },

  e2e: {
    
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return require('./cypress/plugins/index.js')(on, config)


    },
    specPattern: './cypress/integration/*.feature',
  },
  

  env: {
    baseUrl: 'fr.foncia.com'
  },
  


});


