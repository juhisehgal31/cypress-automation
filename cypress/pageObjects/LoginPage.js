import TestUtils from '../support/TestUtils';

const testUtils = new TestUtils();
class LoginPage {

    login(email, password) {
      cy.get('#email').type(email);
      cy.get('#pass').type(password);
      cy.get('button.action.login.primary').click();
    }
  
    verifyLogin() {
      testUtils.waitUntilTextVisible('Home Page', 30000);
    }
  }
  export default LoginPage;
  