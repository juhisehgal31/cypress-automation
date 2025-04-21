# Cypress Automation Framework – Magento Demo

This repository contains an end-to-end test suite built with Cypress for automating user flows on the [Magento Demo Website](https://magento.softwaretestingboard.com/). The framework follows the Page Object Model structure and includes external data usage, visual reports, and test screenshots on failure.

---

## 1. Setting Up Cypress on macOS

### Prerequisites

To get started on a Mac, you'll need:

- **Homebrew** (for installing packages):
  ```bash
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  ```

- **Node.js and npm**:
  ```bash
  brew install node
  ```

- Confirm installation:
  ```bash
  node -v
  npm -v
  ```

- **Visual Studio Code** for editing code:  
  Download from [https://code.visualstudio.com/](https://code.visualstudio.com/)

---

## 2. Cloning the Project

Clone the GitHub repository and install dependencies:

```bash
git clone https://github.com/juhisehgal31/cypress-automation.git
cd cypress-automation
npm install
```

---

## 3. Running the Tests

### To execute all tests and generate the report:
```bash
BASE_URL=https://magento.softwaretestingboard.com npm run test
```

### To open Cypress Test Runner (GUI):
```bash
npx cypress open
```

---

## 4. Folder Structure & Test Case Summary

### Cypress Test Files: `/cypress/e2e/`

- **registration.cy.js**  
  Automates the new user registration flow and verifies successful login.

- **placeOrder.cy.js**  
  Adds multiple items to cart, completes a checkout, and confirms total price.

- **wishlist.cy.js**  
  Adds items to wishlist and checks out from wishlist.

All test actions are abstracted into reusable methods using POM classes located in `/cypress/pageObjects/`.

Test input data like user details are stored in JSON format under `/cypress/fixtures/userData.json`.

---

## 5. Reports & Screenshots

After each run:

-  A detailed HTML report is generated at:
  ```
  cypress/reports/index.html
  ```

- Screenshots are automatically captured for any failed test case and saved under:
  ```
  cypress/screenshots/
  ```

---

## 6. Using Environment Variables

No credentials or base URLs are hardcoded. You can pass values using environment variables:

```bash
BASE_URL=https://magento.softwaretestingboard.com npm run test
```

This makes the project more secure and flexible for different environments.

---

## Author

Built and maintained by [Juhi Sehgal](https://github.com/juhisehgal31)

---

## 📎 Helpful Resources

- [Cypress Official Docs](https://docs.cypress.io/)
- [Mochawesome Reporting](https://github.com/lukejpreston/mochawesome-report-generator)
- [Magento Demo Site](https://magento.softwaretestingboard.com/)
