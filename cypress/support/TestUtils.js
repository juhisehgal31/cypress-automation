
class TestUtils {
   
    navigateToURL(url) {
      cy.visit(url);
    }
  
    /**
     * Generates a random email with 6-digit suffix
     * @returns {string} juhitestXXXXXX@yopmail.com
     */
    generateRandomEmail() {
      const randomNum = Math.floor(100000 + Math.random() * 900000);
      return `juhitest${randomNum}@yopmail.com`;
    }

    waitUntilTextVisible(element, totalTime)
    {
      cy.contains(element, { timeout: totalTime }) // waits up to 30 seconds
      .should('be.visible');
    }
    waitUntilElementVisibleAndClick(element, totalTime)
    {
      cy.get(element, { timeout: totalTime })
      .should('be.visible')
      .click();
    }

    waitUntilTextVisibleAndClick(selector, text, totalTime) {
      cy.contains(selector, text, { timeout: totalTime })
        .should('be.visible')
        .click();
    }
    
  }
  
  export default TestUtils;
  