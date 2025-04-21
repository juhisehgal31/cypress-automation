class CartPage {
    verifyCartItemCount(expectedCount) {
      cy.get('.cart.item .product-item-details').should('have.length', expectedCount);
    }
  
    proceedToCheckout() {
      cy.get('#top-cart-btn-checkout').click();
    }
  
    verifySubtotal(expectedSubTotal) {
      cy.get('div.amount.price-container span.price')
        .invoke('text')
        .then((actualSubtotal) => {
          expect(actualSubtotal.trim()).to.equal(expectedSubTotal);
        });
    }
    calculateSubTotal(items) {
      let total = 0;
    
      items.forEach(item => {
        const price = parseFloat(item.price.replace('$', ''));
        total += price * item.qty;
      });
    
      const formattedTotal = `$${total.toFixed(2)}`;
      cy.log(`Calculated Subtotal: ${formattedTotal}`);
    
      // Read, update, and write to userData.json
      cy.readFile('cypress/fixtures/userData.json').then((data) => {
        data.expectedSubTotal = formattedTotal;
        cy.writeFile('cypress/fixtures/userData.json', data);
      });
    
      return formattedTotal; // still return if needed for in-test comparison
    }
    
    
    

    navigateToCart() {
      cy.wait(30000);

      // Wait until the cart icon is visible
      cy.get('.action.showcart', { timeout: 30000 }).should('be.visible');
    
      // Click the cart icon
      cy.get('.action.showcart').click();
    
      // Ensure checkout button is visible
      cy.get('#top-cart-btn-checkout', { timeout: 10000 }).should('be.visible');
    }
    

    

   
    
    

  }
  export default CartPage;
  