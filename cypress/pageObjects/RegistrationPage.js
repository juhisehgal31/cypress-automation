import TestUtils from '../support/TestUtils';

const testUtils = new TestUtils();
class RegistrationPage {
    createAccount(user) {
      cy.get('#firstname').type(user.firstName);
      cy.get('#lastname').type(user.lastName);
      cy.get('#email_address').type(user.newUserEmail);
      cy.get('#password').type(user.password);
      cy.get('#password-confirmation').type(user.password);
    }
  
    submit() {
      cy.get('button[title="Create an Account"] span').click();
    }
  

      verifyRegistration() {
        testUtils.waitUntilTextVisible('Thank you for registering', 30000);
      }
      
    
  }
  export default RegistrationPage;
  