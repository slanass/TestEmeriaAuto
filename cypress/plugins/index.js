/// <reference types="cypress" />
// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
const cucumber = require('cypress-cucumber-preprocessor').default

const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
const exec = require('child_process').execSync;
module.exports = (on) => {
  reporter: 'cypress-mochawesome-reporter',

  on('before:run', async (details) => {
    console.log('override before:run');
    await beforeRunHook(details);
    //If you are using other than Windows remove below two lines
    //await exec("IF EXIST cypress\\screenshots rmdir /Q /S cypress\\screenshots")
    //await exec("IF EXIST cypress\\reports rmdir /Q /S cypress\\reports")
  });

  on('after:run', async () => {
    console.log('override after:run');
    //if you are using other than Windows remove below line (having await exec)
    //await exec("npx jrm ./cypress/reports/junitreport.xml ./cypress/reports/junit/*.xml");
    await afterRunHook();
  });
};

// Alternatively you can use CommonJS syntax:
// require('./commands')




module.exports = (on, config) => {

    on('file:preprocessor', cucumber())
    // pour forcer le navigateur à démarer en français in order to fix pipline issue
    /*on('before:browser:launch', (browser = {}, launchOptions) => {
      if (browser.name === 'chrome') {
        launchOptions.args.push('--lang=fr');
        return launchOptions;
      }
    });*/
    
    //on('task', { downloadFile })
    on('task', {
      parseXlsx({ filePath }) {
        return new Promise((resolve, reject) => {
          try {
            const jsonData = xlsx.parse(fs.readFileSync(filePath));
            resolve(jsonData);
          } catch (e) {
            reject(e);
          }
        });
      }
    });
  }
  