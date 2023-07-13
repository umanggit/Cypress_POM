const { defineConfig } = require("cypress");

module.exports = defineConfig({
 
  reporter: 'cypress-mochawesome-reporter', // for html reports
  e2e: {
    watchForFileChanges : false,           // to not execute code automatically after changes made
    setupNodeEvents(on, config) {
      // implement node event listeners here
      this.screenshotOnRunFailure = true;
      require('cypress-mochawesome-reporter/plugin')(on); // for html reports
    },
    baseUrl : 'https://example.cypress.io',

    "retries": {
        // Configure retry attempts for `cypress run`
        // Default is 0
        "runMode": 2,
        // Configure retry attempts for `cypress open`
        // Default is 0
        "openMode": 2,
      }
  

  },

  
});
