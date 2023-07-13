/// <reference types = "cypress"/>

it("Google search",
/*
{
    retries: {
      runMode: 2,
      openMode: 1,
    },
  },*/
() => {

    cy.visit("https://google.com");

 // cy.get('.SDkEP').type("Umang {enter}");

 // cy.contains('Google Search').click();

    cy.get('.SDkEP').type("Umang");
    cy.get('.gNO89b').first().click();

})