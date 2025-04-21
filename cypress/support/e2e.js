import 'cypress-mochawesome-reporter/register';


Cypress.on('fail', (error, runnable) => {
    console.error('Test failed:', error.message);
    throw error; // don't forget to re-throw!
  });

  Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore specific Magento frontend JS error
    if (err.message.includes('AddFotoramaVideoEvents is not a function')) {
      return false; // prevents test from failing
    }
  });

  Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore Magento frontend errors
    if (err.message.includes("clone")) {
      return false; // prevents Cypress from failing the test
    }
  });
  
  
  