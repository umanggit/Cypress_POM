beforeEach(function(){

    cy.visit("/")

})


describe("Test Suite # 1", () => {

    it("Test Case # 1", () => {

   //   cy.visit("https://example.cypress.io")
        cy.contains('get').click();
        cy.get('#query-btn')
            .should("contain", "Button")
            .should("have.class", "query-btn")    
            .should("be.visible")
            .should("be.enabled")
            .invoke("attr","id").should("equal", "query-btn")

        expect(true).to.be.true

        assert.equal(4, 4, "Equal")

    })

    it("Test Case # 2", () => {

        cy.contains('get').click();
      
    })

})
    it("Test Case # 3", () => {

         cy.contains('get').click();
  
    })

    it("Test Case # 3", () => {

        cy.contains('get').click();
 
   })