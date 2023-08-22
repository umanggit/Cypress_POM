/// <reference types = "cypress"/>

class searchResult
{
 
    title = '#page-title>h1'
    metalDropDown = '#Metal-form'
    metalDropDownItems = '#metal  .form-items .form-item  .prcs-dlh'
    filterName = '.filterDisplayName'
    designCount = '.total-designs'
    totalDesignsDisplayed = '.inner.pd-gray-bg'
    genderDropDown = '#Gender-form'
   // genderDropDownItems = '#gender .prcs-dlh #pchkbox'
    genderDropDownItems = '[data-p^="jewellery@ri"]'
    genderDropDownUnisex = '[data-p="jewellery@rings-unisex!!'
    

    verifingSearchString(value)
    {
        let actualText;
        cy.get(this.title).then(($data)=>{
            actualText = $data.text().toUpperCase().trim();
            expect(actualText).to.be.equal(value)
        })
    }

    filterResultsByMetal(value)
    {
        cy.get(this.metalDropDown).trigger('mouseover').click();
        cy.get(this.metalDropDownItems).eq(2).click();
        cy.get(this.filterName).then(($data)=>{
            expect($data.text().trim()).to.be.equal(value)
        })

    }

    verifyingNumberOfSearchResults()
    {
        let expectedCount;
        cy.get(this.designCount).then(($data)=>{
            expectedCount = $data.text().substring(0,2);
            cy.log("Expected count is ", expectedCount);
            cy.wait(5000);
            cy.log("Expected count is ", expectedCount).then(()=>{
                cy.get(this.totalDesignsDisplayed).should("have.length", expectedCount)
            })
        })
    }

    filterResultsByGender()
    {
        cy.get(this.genderDropDown).trigger('mouseover').click();
        cy.get(this.genderDropDownItems).should("have.length", 3);
        cy.wait(200);
        cy.get(this.genderDropDownUnisex).click();
    }
    

}

export default searchResult
