describe ('MyTestSuite', function(){

    it('Verify Title On The Page-positive', function(){
        cy.visit('http://omahjamur.alimindev.com/')
        cy.title().should('eq', 'Omah Jamur')
    })

    it('Verify Title On The Page-negative', function(){
        cy.visit('http://omahjamur.alimindev.com/')
        cy.title().should('eq', 'OmahJamur')
    })
})