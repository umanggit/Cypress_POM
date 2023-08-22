/// <reference types = "cypress"/>

class search
{
 //   popup = '.deny-btn'
    searchBox = '#search_query_top_elastic_search'
    dynamicDropDown = '.xdsoft_autocomplete_dropdown div a'
    navBar = '.wh-navbar > ul > li'


    visit()
    {
        cy.visit("/");
    }

    // closePopUp()
    // {
    //     cy.get(this.popup).should('be.visible').click();
    // }

    searchForItem(value1, value2)
    {
     //   cy.get(this.popup).click();
        cy.get(this.searchBox).type(value1,{delay:30}).then(()=>{
            cy.get(this.dynamicDropDown).each(($el)=>{
                cy.log($el.text())
                if($el.text() == value2)
                {
                    cy.wrap($el).wait(3000).click();
                }
            })
        })
    }

    navBarItems()
    {
        cy.get(this.navBar).should("have.length", 10).eq(2).should('be.visible').click();
    }

}

export default search