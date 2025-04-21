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

describe('Test Case C - Wishlist to Checkout', () => {
    const baseURL = Cypress.config('baseUrl');
  it('Add product to whishlist and checkout', () => {
    testUtils.navigateToURL(baseURL);
    homePage.navigateToSignInPage();
    loginPage.login(user.email, user.password);
    loginPage.verifyLogin();

    productPage.searchForProduct(user.sku1)
    productPage.searchAndClickProduct(user.sku1)
    productPage.selectColor(user.sku1Color)
    productPage.selectSize(user.sku1Size)
    productPage.setSkuPrice("sku1Price")
    productPage.selectQty(user.sku1Qty)
    productPage.addProductToWishList()
    productPage.addToCartFromWishList()

    cartPage.navigateToCart();
    
    cartPage.proceedToCheckout();

    checkoutPage.fillShippingDetails();
    checkoutPage.continueToPayment();
    checkoutPage.placeOrder();
    checkoutPage.orderConfirmation();




  });

});
