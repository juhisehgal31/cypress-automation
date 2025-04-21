import RegistrationPage from '../pageObjects/RegistrationPage';
import LoginPage from '../pageObjects/LoginPage';
import HomePage from '../pageObjects/HomePage';
import userFixture from '../fixtures/userData.json';
import TestUtils from '../support/TestUtils';

const registrationPage = new RegistrationPage();
const loginPage = new LoginPage();
const homePage = new HomePage();
const testUtils = new TestUtils

describe('Test Case A - Registration & Login Validation', () => {
  const baseURL = Cypress.config('baseUrl');

  it('Register and login with the same user', () => {
    const randomEmail = testUtils.generateRandomEmail();

    const user = {
      ...userFixture,
      newUserEmail: randomEmail
    };

    // Save the generated user to JSON file
    cy.writeFile('cypress/fixtures/userData.json', user);

    // Step 1: Register
    testUtils.navigateToURL(baseURL);
    homePage.navigateToCreateAccountPage();
    registrationPage.createAccount(user);
    registrationPage.submit();
    registrationPage.verifyRegistration();

    // Step 2: Logout
    homePage.logout();

    // Step 3: Login using newly created account
    testUtils.navigateToURL(baseURL);
    homePage.navigateToSignInPage();
    loginPage.login(user.newUserEmail, user.password);
    loginPage.verifyLogin();
  });
});
