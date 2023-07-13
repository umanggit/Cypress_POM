describe("Test Suite # 1", () => {

  before(() => {
    // Register the global event listener before the tests start
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Prevent the error from failing the test
      return false;
    });
  });

    it("Test Case # 1", () => {

        cy.visit("https://www.bluestone.com/");
        cy.get('#denyBtn').click(); 

     //   cy.contains('Watch Jewellery').trigger('mouseover').click();

      
      //  cy.get('[data-layer="Padding"]').trigger('mouseover');

      cy.get('.wh-navbar > ul > li').should("have.length", 10).eq(2).should('be.visible').click();
      // click();
    //  cy.get('.wh-navbar > ul > li').eq(1).should('be.visible').click();


 //   cy.get(".wh-submenu > ul > li").contains("Below").click({force : true});

   /* cy.get(".wh-submenu > ul > li").each(($el)=>{
        if($el.text().includes('Below 15, 000'))                      
        {
        cy.wrap($el).click();
        }
               })
               */

            
               
               cy.get('#Gender-form').trigger('mouseover').click();
               cy.get("#gender .prcs-dlh #pchkbox").should("have.length", 3);
               cy.wait(200);
               cy.get('[data-p="jewellery@rings-unisex!!"]').click();

           //  cy.get('.browse-item-2 > .inner > .pr-i > .wishlist > i').should('be.visible').click();
               
            //   cy.get("#pid_34682").invoke("removeAttr", 'target').click();
            cy.wait(200);
  
         //   cy.get('.p-image > a').should("have.length", 5).eq(2).should('be.visible').invoke("removeAttr", 'target').click();

  //          cy.get('.p-image > a > .hc').each(($el)=>{

  //              if($el.attr("alt").includes('The Holy Cross Ring'))
  //              {
  //                  cy.wrap($el).invoke("removeAttr", "target").click();
  //              }
   //         })        
   
                    cy.get('.p-image > a').should("have.length", 5).each(($el)=>{

                        if($el.attr("id").includes('pid_1457'))
                        {
                            cy.wrap($el).invoke("removeAttr", "target").click();
                        }
                  
              })

                
                cy.get('h1.title-5').contains("The Holy Cross Ring")

                let sometext;

                cy.get('#getNearestStore').clear({force : true}).type('246733').should('have.value', 246733)

                cy.get('#getNearestStore').invoke('val')
                .then((sometext)=>{

                cy.log(sometext, sometext.length)

             
                    // if(sometext != 246733)
                    // {
                    //     cy.get('#getNearestStore').clear({force : true}).type('246733')
                    //     .should('have.value', '246733')
                    //     .and('have.length', 6)
                    // }

                  //  let deliverydate, ideliverydate;

                    cy.get('.pin-btn.fns-btn').should('be.visible').and('have.class','pin-btn fns-btn').click();
  
                    if(sometext.length < 6 || sometext.length > 6)
                    {
                      cy.get(".formErrorContent").each(($e1)=>{
                        expect($e1.text()).contains("* Please enter a valid 6 digit pincode.")
                      })
                    }
  
                    else
                    {
  
                      cy.get(".store-delivery").then((data)=>{
  
                        cy.log(data.text());
    
                      expect(data.text()).contains('Delivery By')
    
                      // deliverydate = data.text().substring(9,11);
                      // cy.log(typeof deliverydate)
                      // ideliverydate = parseInt(deliverydate);
                      // cy.log(typeof ideliverydate, ideliverydate)
    
      
                      })
                    }

                }).then(function(){

                 let size;

                  cy.get('.size-box-overlay').each(($e2)=>{
                  size = $e2.text();

                  cy.log(typeof size, size)

                  if(size.trim() === 'Select Size')
                  {
                    cy.get('.size-box-overlay').click();
                    cy.get("#sizeDropdown > li").should('have.length', 25)
                    cy.get("#sizeDropdown > li").eq(4).click();
                    cy.get("#buy-now").click();

                    // // cy.get(".formErrorContent").each(($e1)=>{
                    // //  expect($e1.text()).contains("* This field is required")

                    // })
                    
                  }

                  else
                  {
                    cy.get("#buy-now").click();

                  }

                  let price, totalPayable;

                  cy.get(".product-title.col-xs-6 > a").should('have.text', "The Holy Cross Ring")

                  
                  cy.get(".col-xs-6 > .product-pricing > .price-info-block > .new-price").then((data)=>{
  
                  price = parseInt(data.text().trim().replace(/\D/g,''))

                  cy.log(price)

                  })
                  
                  cy.get(".new-price.pull-right").then((data1)=>{
  
                  totalPayable = parseInt(data1.text().trim().replace(/\D/g,''))                    

                  cy.log(totalPayable)
  
                    })

                  if(price == totalPayable)
                  {
                    cy.get('[title="Place Order"]').click();
                  }
                  else
                  {

                  }
                  
                  cy.get('select').select(0).should('have.value', 1)
                  cy.get('[title="Place Order"]').click();

              })

        })
                

                                  
              
         }) 
               

    
    })
