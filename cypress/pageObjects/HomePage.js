
import TestUtils from '../support/TestUtils';

const testUtils = new TestUtils();
class HomePage {
  
    navigateToCreateAccountPage() {
    cy.contains('a', 'Create an Account').click();
    }

    logout()
    {
        testUtils.waitUntilElementVisibleAndClick("div.panel.header button[type='button']", 30000);
        testUtils.waitUntilTextVisibleAndClick('a', 'Sign Out', 30000);
        testUtils.waitUntilTextVisible('Home Page', 30000);
    }

    navigateToSignInPage() {
        cy.contains('a', 'Sign In').click();
        }
  }
  export default HomePage;
  