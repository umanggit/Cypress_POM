        describe("Test Suite", function(){
        it("TestCase #1", function(){
            cy.visit("https://www.bluestone.com/");                                         // opening the URL
            cy.get('#denyBtn').click(); // closing the popup
            cy.get("#search_query_top_elastic_search").type("chains").then(function(){
            cy.wait(200);
            cy.get(".xdsoft_autocomplete_dropdown div a ").each(($el)=>{
            cy.log($el.text())                                                              // printed all search results on log
            if($el.text() === 'Gold Chains')                                                // if found Gold chains then clicked on that
            {
            cy.wrap($el).click();
            }

        })
        let actualText;

        cy.get("#page-title>h1").then((data)=>{                                             // cy is an object and get is an menthod
        // cy.log(data.text().toUpperCase());
        actualText = data.text().toUpperCase().trim();
        expect(actualText).equal('SEARCH RESULTS FOR "GOLD CHAINS"')
            
        cy.wrap(actualText).should("contains", 'SEARCH RESULTS FOR "GOLD CHAINS"')
        })


        cy.get('#Price-form > .title').trigger('mouseover').click(); //trigger('mouseover');
        cy.get('#price  .form-items .form-item  .prcs-dlh').each(($el)=>{
        //  cy.log($el.text()) // printed all search results on log
            if($el.text().includes('Rs. 10,000 - Rs. 20,000 (22)'))                      // if found Gold chains then clicked on that
            {
            cy.wrap($el).click();
            }

        // cy.contains("ABOUT US").scrollIntoView({duration:100});
        // cy.contains("ABOUT US").should("be.visible");
        //should("have.text", 'Search Results For "gold Chains"')

        });

        
            let expectedCount;
            cy.get('.total-designs').then(($el2)=>{

            expectedCount = $el2.text().substring(0,2);
            cy.log("expected count is", expectedCount)


        }).then(function(){
            
            cy.get('.inner.pd-gray-bg').should("have.length",expectedCount);

        })        
        

        });        

    });
});
