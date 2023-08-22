/// <reference types = "cypress"/>

class placeOrder
{
  
  itemPrice = '.col-xs-6 > .product-pricing > .price-info-block > .new-price'
  payablePrice = '.new-price.pull-right'
  placeOrderButton = '[title="Place Order"]'

  createOrder()
  {
    let price, totalPayable;
    cy.get(this.itemPrice).then(($p1)=>{
      price = parseInt($p1.text().trim().replace(/\D/g,''))
      cy.log(price)
    })
    cy.get(this.payablePrice).then(($p2)=>{
      totalPayable = parseInt($p2.text().trim().replace(/\D/g,''))
      cy.log(totalPayable) 
  })
    if(price == totalPayable)
    {
      cy.get(this.placeOrderButton).click();
    }
    else
    {
      cy.get('select').select(0).should('have.value', 1)
      cy.get(this.placeOrderButton).click();
    }
 
  }
}
export default placeOrder