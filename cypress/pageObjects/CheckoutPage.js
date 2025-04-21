class CheckoutPage {
    fillShippingDetails() {

      cy.get('input[value="tablerate_bestway"]', { timeout: 30000 })
  .should('be.visible')
  .click();

    
      // cy.get('body').then(($body) => {
      //   const newAddressSpan = $body.find('.shipping-address-item.selected-item');
      
      //   // if (newAddressSpan.length > 0 && newAddressSpan.is(':visible')) {
      //   //   // If element is found and visible
      //   //   cy.log(' "New Address" is visible, clicking tablerate option');
      //     cy.get('input[value="tablerate_bestway"]').click();
      //   // } else {
      //   //   // Else fill the address form
      //   //   cy.log('✏️ Filling in shipping address details...');
      //   //   cy.get('#M3058AT').type('123 Test St');
      //   //   cy.get('#XNFWWD9').type('Test City');
      //   //   cy.get('#JJDN41I').select(1);
      //   //   cy.get('#UFY2W5D').type('12345');
      //   //   cy.get('#LWJUE9X').select('United States');
      //   //   cy.get('#R4B1KCJ').type('1234567890');
      //   //   cy.get('input[value="tablerate_bestway"]').click();

      //   // }
      // });
      
      
     
    }

    verifyOrderTotalCalculation(subtotalParam) {
      // Convert passed subtotal (like "$286.00") to number
      const subtotal = parseFloat(subtotalParam.replace('$', ''));
    
      // Get Discount
      cy.get('tr.totals.discount span.price')
        .invoke('text')
        .then((discountText) => {
          const discount = parseFloat(discountText.replace('$', '').replace('-', ''));
    
          // Get Total
          cy.get('tr.grand.totals span.price')
            .invoke('text')
            .then((totalText) => {
              const actualTotal = parseFloat(totalText.replace('$', ''));
              const expectedTotal = parseFloat((subtotal - discount).toFixed(2));
    
              cy.log(`Subtotal: $${subtotal}`);
              cy.log(`Discount: $${discount}`);
              cy.log(`Expected Total: $${expectedTotal}`);
              cy.log(`Actual Total from UI: $${actualTotal}`);
    
              expect(actualTotal, 'Order total should match calculated total').to.equal(expectedTotal);
            });
        });
    }
    


  
    continueToPayment() {
      cy.get('button.button.action.continue.primary').click();
    }
  
    placeOrder() {
      cy.get('button.action.primary.checkout').click();
        }

        orderConfirmation()
        {
          cy.get('span.base', { timeout: 50000 })
  .should('be.visible')
  .and('have.text', 'Thank you for your purchase!');


  cy.get('a.order-number strong')
  .invoke('text')
  .then((orderId) => {

    // Read, update, and write to userData.json
    cy.readFile('cypress/fixtures/userData.json').then((data) => {
      data.orderId = orderId;
      cy.writeFile('cypress/fixtures/userData.json', data);
    });
  });


        }

        

        
  }
  export default CheckoutPage;
  