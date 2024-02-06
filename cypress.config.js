const { defineConfig } = require("cypress");

module.exports = defineConfig({
  experimentalStudio: true,
  screenshotOnRunFailure:true,// If test is failed, take a screenshoot (npx cypress run)
  trashAssetsBeforeRuns:true, // Deletes images and videos from the previous test when the test is run again
  video:true,//Test npx cypress takes video when run with run command
  retries: {
    runMode: 1,//When the test is run with the npx cypress run command, if the test fails, re-run the test for the number of times specified here.
    openMode: 1,//When the test is run with the npx cypress open command, if the test fails, it will rerun the test for the number of times specified here
    },
  

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://practicesoftwaretesting.com/#/',
    env:{
      register:'auth/register'
    },
   
  },
});
