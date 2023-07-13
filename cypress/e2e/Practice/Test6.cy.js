describe("Test Suite", function(){
    it("Test case", function(){
        cy.visit("https://www.bluestone.com/");
        cy.get('#denyBtn').click(); // closing the popup
        cy.wait(200)

  //      cy.contains("Watch Jewellery").should('have.text','Watch Jewellery ').click();

          cy.contains('Watch Jewellery').trigger('mouseover').click();

          cy.get(".wh-submenu > ul > li > a").should('have.length', 3).contains('Pin').click({force:true});

          cy.get('.view-by-wrap').trigger('mouseover').click();

          cy.get("#view-sort-by > .form-item").should('have.length', 5).each(($el)=>{
                       cy.log($el.text());

                       if($el.text().includes('Price Low to High'))
                       {
                        cy.wrap($el).click();

                       }
                  })

                  let lowestPrice, otherPrice;

                  cy.get('.new-price:visible').each(($el, index, $list)=>{
                
                    if(index == 0)
                    {
                        lowestPrice = parseInt($el.text().trim().replace(/\D/g,''))  //Rs. 5,000 // \D matching anything otherthan decimal or digit
                    }
                    else
                    {
                        otherPrice = parseInt($el.text().trim().replace(/\D/g,''))
    
                        expect(lowestPrice).not.to.greaterThan(otherPrice)
                        lowestPrice = otherPrice
                    }
    
                
                 })
          /*

//      cy.get(".menuparent.relative.offers-menuparent").click();

//        cy.get(".wh-submenu > ul > li > a").each(($el)=>{
//            cy.log($el.text())
//        })


//        cy.wait(2000)

        cy.get(".wh-submenu > ul > li > a").contains('Pin').click({force:true});   // 

        cy.get('.view-by-wrap').click();
        
 //     cy.get("#view-sort-by > .form-item > a").should('have.length',5)
 //       cy.get("#view-sort-by > .form-item > a").each(($el)=>{
 //           cy.log($el.text());
 //       })

        
        cy.get("#view-sort-by > .form-item > a").eq(2).should('have.text','Price Low to High ').click();

        cy.get('.new-price').should('have.length', 22)


    //    cy.get('.new-price:visible').eq(0).then((data)=>{

   //         expect(data.text().trim()).equal("Rs. 5,371")
 
//            lowestPrice = data.text().trim();
  //          cy.log(lowestPrice);
    //        cy.log(typeof lowestPrice)

             let lowestPrice ;
             let otherPrice;

             cy.get('.new-price:visible').each(($el, index, $list)=>{
                
                if(index == 0)
                {
                    lowestPrice = parseInt($el.text().trim().replace(/\D/g,''))  //Rs. 5,000 // \D matching anything otherthan decimal or digit
                }
                else
                {
                    otherPrice = parseInt($el.text().trim().replace(/\D/g,''))

                    expect(lowestPrice).not.to.greaterThan(otherPrice)
                    lowestPrice = otherPrice
                }

            
             })
             */

        })
    })
//})