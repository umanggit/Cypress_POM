/// <reference types = "cypress"/>

class sorting
{
    sortingDropDown = '.view-by-wrap'
    dropDownItems = '#view-sort-by > .form-item'
    finalRate = '.new-price'

    selectSortingOption()
    {
        cy.get(this.sortingDropDown).trigger('mouseover').click();
        cy.get(this.dropDownItems).should('have.length', 5).each(($data)=>{
            cy.log($data.text());
            if($data.text().includes('Price Low to High'))
            {
                cy.wrap($data).click();
            }
        })
    }

    VerifySortingIsOk()
    {
        let lowestPrice, otherPrice;
        cy.get(this.finalRate).each(($el, index, $list)=>{
            if(index == 0)
            {
                lowestPrice = parseInt($el.text().trim().replace(/\D/g,''))
            }
            else
            {
                otherPrice = parseInt($el.text().trim().replace(/\D/g,''))
                expect(lowestPrice).not.to.be.greaterThan(otherPrice)
                lowestPrice = otherPrice
            }
        })
    }

}

export default sorting
