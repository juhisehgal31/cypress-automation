import 'cypress-mochawesome-reporter/register';


Cypress.on('fail', (error, runnable) => {
    console.error('🔥 Test failed:', error.message);
    throw error; // don't forget to re-throw!
  });

  Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore specific Magento frontend JS error
    if (err.message.includes('AddFotoramaVideoEvents is not a function')) {
      return false; // prevents test from failing
    }
  });
  
  