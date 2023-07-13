
    it("test", function(){
        cy.visit("https://www.flipkart.com/")

        cy.get("[name = 'q']").type('iphone',{delay:20});

        cy.wait(1000);

        cy.get("#container ul li").each(($el)=>{
            cy.log($el.text())
            if($el.text()=='iphone 14')
            {
                cy.wrap($el).click();
            }

        })
        cy.contains("Price -- Low to High").click();

        cy.wait(2000);

        let lowestPrice ;
        cy.get("[class*='col col-5-12 nlI3QM'] [class*='_30jeq3 _1_WHN1']").eq(0).then((data)=>{

           expect(data.text().trim()).equal("₹36,990")

           lowestPrice = data.text().trim();
           

       }).then(()=>{

        cy.log(typeof lowestPrice)
        

        cy.get("[class*='col col-5-12 nlI3QM'] [class*='_30jeq3 _1_WHN1']").each(($el, index, $list)=>{
     //       cy.log($el.text())  
            cy.log($el.text().substring(1,7))   
 
            
            if(lowestPrice.substring(1,7) <= $el.text().substring(1,7) )
            {
                cy.log("Pass")
            }
            else
            {                 
                    console.log("Fail")
            }


            
//            for(let i = 0 ; i < $list.length-1; i++)
 //           {
 //               if()
 //           }
            
                   
                   

       })  

   

        })

    })
