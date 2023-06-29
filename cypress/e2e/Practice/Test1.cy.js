/// <reference types = "cypress"/>

it("Google search", () => {

    cy.visit("https://google.com");

 // cy.get('.SDkEP').type("Umang {enter}");

 // cy.contains('Google Search').click();

    cy.get('.SDkEP').type("Umang");
    cy.get('.gNO89b').first().click();


})