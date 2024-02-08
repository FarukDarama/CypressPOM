const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    overwrite: true,//if true, deletes the old html file and creates a new one
    charts: true,//Adds a graph to the report about the pass and fail status of tests
    reportPageTitle: 'ToolShop Project Report',//Allows to change the report title
    reportFilename: "[status]_[datetime]-[name]-report",//Reports Name status/time/testname
    timestamp: "longDate",//shortDate is used too
    embeddedScreenshots: true,//Allows the image file to be embedded in the html file
    inlineAssets: true,//allows the assets folder to be embedded in the html file
    saveAllAttempts: false,
    ignoreVideos: false,

    videoOnFailOnly: false,

  },
  experimentalStudio: true,
  screenshotOnRunFailure: true,// If test is failed, take a screenshoot (npx cypress run)
  trashAssetsBeforeRuns: true, // Deletes images and videos from the previous test when the test is run again
  video: true,//Test npx cypress takes video when run with run command
  retries: {
    runMode: 0,//When the test is run with the npx cypress run command, if the test fails, re-run the test for the number of times specified here.
    openMode: 0,//When the test is run with the npx cypress open command, if the test fails, it will rerun the test for the number of times specified here
  },


  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://practicesoftwaretesting.com/#/',
    env: {
      register: 'auth/register',
      login:'auth/login',
      dashboard :'admin/dashboard'
    },

  },
});
