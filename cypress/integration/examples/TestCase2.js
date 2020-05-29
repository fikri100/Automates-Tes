/// <reference types="cypress" />

describe('Locating Element', function() {

    it('Verify type of location', function() {
   
       cy.viewport(1366, 635)
    
       cy.visit('https://demo.nopcommerce.com/')
    
       cy.get('.header > .header-lower > .search-box > #small-search-box-form > #small-searchterms').click()
    
       cy.get('.header > .header-lower > .search-box > #small-search-box-form > #small-searchterms').type('Apple MacBook Pro 13-inch')
    
       cy.get('.header > .header-lower > .search-box > #small-search-box-form > .button-1').click()
    
       cy.visit('https://demo.nopcommerce.com/search?q=Apple+MacBook+Pro+13-inch')
    
       cy.get('.item-box > .product-item > .picture > a > img').click()
    
       cy.visit('https://demo.nopcommerce.com/apple-macbook-pro-13-inch')
    
       cy.get('.product-essential > .overview > .add-to-cart > .add-to-cart-panel > #product_enteredQuantity_4').click()
    
       cy.get('.product-essential > .overview > .add-to-cart > .add-to-cart-panel > #add-to-cart-button-4').click()
    
    })
   
   })
   