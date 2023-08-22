/// <reference types = "cypress"/>

class locationAndSize
{
  

  itemsDisplayed = '.p-image > a'
  pinCodeBox = '#getNearestStore'
  pinUpdateButton = '.pin-btn.fns-btn'
  alertMessage = '.formErrorContent'
  deliveryDateMessage = '.store-delivery'
  sizeDropDown = '.size-box-overlay'
  sizeDropDownItems = '#sizeDropdown > li'
  buyNowButton = '#buy-now'

  pin= 1;

  selectItem()
  {
    cy.get(this.itemsDisplayed).should('have.length', 5).each(($item)=>{
      if($item.attr('id').includes('pid_1457'))
      {
        cy.wrap($item).invoke("removeAttr", "target").click();

      }
    })
  }
    enterDeliveryPIN()
    {
      cy.get(this.pinCodeBox).clear({force : true}).type('246733').should('have.value', 246733)
      cy.get(this.pinCodeBox).invoke('val')
      .then((pin)=>{
        this.pin = pin;
        cy.log(this.pin, this.pin.length)
      })
    }

    capturePINLenAlert()
    {
      cy.get(this.pinUpdateButton).should('be.visible').and('have.class', 'pin-btn fns-btn').click({force: true});
      if(this.pin.length < 6 || this.pin.length > 6 ) 
      {
        cy.get(this.alertMessage).each(($alert)=>{
          expect($alert.text()).contains("* Please enter a valid 6 digit pincode.")
        })
      }
      else
      {
        cy.get(this.deliveryDateMessage).each(($delivery)=>{
          expect($delivery.text()).contains('Delivery By')
        })
      }
    }

    selectRingSize()
    {
      let size;
      cy.get(this.sizeDropDown).each(($e1)=>{
        size = $e1.text();
        if(size.trim() === 'Select Size')
        {
          cy.get(this.sizeDropDown).click();
          cy.get(this.sizeDropDownItems).should('have.length', 25).eq(4).click();
          cy.get(this.buyNowButton).click();
        }
        else
        {
          cy.get(this.buyNowButton).click();
        }
      })
    }

}

export default locationAndSize

