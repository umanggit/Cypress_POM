/// <reference types = "cypress"/>

import loginPage from "../pageObjects/loginPage"

describe("POM Test Suite #1", ()=>{

    it("Login Test Case #1", ()=>{

        const lp = new loginPage()

        lp.visit()
        lp.txtEmail("admin@yourstore.com")
        lp.txtPassword("admin")
        lp.btnLogin()

        cy.title().should('be.equal', 'Dashboard / nopCommerce administration')


    })
})