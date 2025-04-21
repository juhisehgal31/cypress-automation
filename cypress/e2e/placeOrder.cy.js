import LoginPage from '../pageObjects/LoginPage';
import CartPage from '../pageObjects/CartPage';
import CheckoutPage from '../pageObjects/CheckoutPage';
import HomePage from '../pageObjects/HomePage';
import TestUtils from '../support/TestUtils';
import user from '../fixtures/userData.json';
import ProductPage from '../pageObjects/productPage';

const loginPage = new LoginPage();
const productPage = new ProductPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();
const homePage = new HomePage();
const testUtils = new TestUtils();

describe('Test Case B - Place Order with Multiple Products and Price Validation', () => {
  const baseURL = Cypress.config('baseUrl');

  it('Login and add products to cart', () => {
    testUtils.navigateToURL(baseURL);
    homePage.navigateToSignInPage();
    loginPage.login(user.email, user.password);
    loginPage.verifyLogin();

    // Add 1 product with 5 qty in cart
    productPage.searchForProduct(user.sku1)
    productPage.searchAndClickProduct(user.sku1)
    productPage.selectColor(user.sku1Color)
    productPage.selectSize(user.sku1Size)
    productPage.setSkuPrice("sku1Price")
    productPage.selectQty(user.sku1Qty)
    productPage.addProductToCart(user.sku1Qty)

    // Add 1 product with 2 qty in cart
    productPage.searchForProduct(user.sku2)
    productPage.searchAndClickProduct(user.sku2)
    productPage.setSkuPrice("sku2Price")
    productPage.selectQty(user.sku2Qty)
    productPage.addProductToCart((Number(user.sku1Qty) + Number(user.sku2Qty)).toString())

  });

  it('Cart Verification', () => {
    testUtils.navigateToURL(baseURL);
    homePage.navigateToSignInPage();
    loginPage.login(user.email, user.password);
    loginPage.verifyLogin();
  

    cartPage.navigateToCart();
    const expectedSubtotal = cartPage.calculateSubTotal([
      { price: user.sku1Price, qty: user.sku1Qty },
      { price: user.sku2Price, qty: user.sku2Qty },
    ]);   
    cartPage.verifySubtotal(user.expectedSubTotal) 
    cartPage.proceedToCheckout();

    checkoutPage.fillShippingDetails();
    checkoutPage.continueToPayment();
    checkoutPage.verifyOrderTotalCalculation(user.expectedSubTotal)
    checkoutPage.placeOrder();
    checkoutPage.orderConfirmation();


  });

});
