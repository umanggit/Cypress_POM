describe("Test Suite", function(){

    it("Test case", function(){

        cy.visit("https://airtable.com")
        cy.contains("Sign in").click();
        cy.get('#px-captcha').click();
        cy.get("#emailLogin").type("test1212@yopmail.com")

     //   if(cy.get('#passwordLogin').should('be.visible'))
     
        if(cy.get('#passwordLogin').should('exist'))
        {
            cy.get("#passwordLogin").type("test1234")
               

        }
        else
        {
            cy.get('.pointer').click();
            cy.get("#passwordLogin").type("test1234")
        }
        
        cy.get(".pointer").click();
        cy.get('.first-initial').click();
        cy.get('.mx1 > .font-family-default').should("have.text","test1212@yopmail.com")

    })
})