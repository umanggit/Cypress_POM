/// <reference types = "cypress"/>

class loginPage
{
    visit()
    {
        cy.visit("https://admin-demo.nopcommerce.com/")
    }

    txtEmail(value)
    {
        const field = cy.get("#Email")
        field.clear()
        field.type(value)
        return this

    }

    txtPassword(value)
    {
        const field = cy.get("#Password")
        field.clear()
        field.type(value)
        return this

    }

    btnLogin()
    {
        const button = cy.get('[type="submit"]')
        button.click()

    }
}

export default loginPage