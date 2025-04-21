class ProductPage {

  searchForProduct(productName) {
    cy.get('#search').type(productName);
    cy.get('button.action.search').click()
  }

  searchAndClickProduct(productName) {
    cy.contains('a.product-item-link', productName).click();
  }

selectColor(colorName) {
  cy.get(`div.swatch-option.color[option-label="${colorName}"]`, { timeout: 10000 })
    .should('be.visible')
    .click();
}

selectSize(sizeLabel) {
  cy.get(`div.swatch-option.text[option-label="${sizeLabel}"]`, { timeout: 10000 })
    .should('be.visible')
    .click();
}

selectQty(qty) {
  cy.get('#qty')
    .should('be.visible')
    .clear()
    .type(qty);
}

addProductToCart(expectedCartQty) {
  cy.get('button#product-addtocart-button span').click();

  // Wait for cart counter to show the expected quantity
  cy.get('.counter-number', { timeout: 30000 })
    .should('be.visible')
    .and('have.text', expectedCartQty);
}

addProductToWishList()
{
  cy.contains('a', 'Add to Wish List').click();
  cy.get('span.base', { timeout: 30000 })
  .should('be.visible')
  .and('have.text', 'My Wish List');
}

addToCartFromWishList()
{
  cy.get('button[title="Add All to Cart"] span').click();
  cy.contains('You have no items in your wish list.').should('be.visible');

}

setSkuPrice(skuName) {
  // Get the price text from the product page (e.g., "$77.00")
  cy.get('div.product-info-main span.price')
    .invoke('text')
    .then((fullPrice) => {
      const priceWithDollar = fullPrice.trim(); // Keep "$", just trim spaces

      // Read the existing userData.json
      cy.readFile('cypress/fixtures/userData.json').then((data) => {
        // Add or update the price under given key
        data[skuName] = priceWithDollar;

        // Write back the updated data
        cy.writeFile('cypress/fixtures/userData.json', data);
      });
    });
}



  
    continueShopping() {
      cy.get('a.showcart').click(); // opens minicart
      cy.get('a.viewcart').click(); // goes to cart
    }
  }
  export default ProductPage;
  