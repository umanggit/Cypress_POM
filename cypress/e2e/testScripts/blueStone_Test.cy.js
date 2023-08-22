/// <reference types = "cypress"/>

import search from "../../pages/bs_home"
import searchResult from "../../pages/bs_searchResult"
import sorting from "../../pages/bs_sorting"
import locationAndSize from "../../pages/bs_locationAndSize"
import placeOrder from "../../pages/bs_placeOrder"

let data = require('../../fixtures/blueStone.json')

const se = new search()
const sr = new searchResult()
const sort = new sorting()
const loc = new locationAndSize()
const po = new placeOrder()


describe("POM Test Suite", ()=>{

    before(() => {
        // Register the global event listener before the tests start
        Cypress.on('uncaught:exception', (err, runnable) => {
          // Prevent the error from failing the test
          return false;
        });
      });

    beforeEach(()=>{

        se.visit();
//        se.closePopUp();
        se.searchForItem(data.item1, data.item2);
        sr.verifingSearchString(data.title);
        sr.filterResultsByMetal(data.metal);

    })


    it.only("Test case #1 - Verifying number of items being displyed for a particular search query", ()=>{
    
        sr.verifyingNumberOfSearchResults();
    })

    it("Test case #2 - Verfying that items are indeed sorted by price low to high", ()=>{

        sort.selectSortingOption();
        sort.VerifySortingIsOk();

    })

    it("Test case #3 - Placing the order", ()=>{

        se.navBarItems();
        sr.filterResultsByGender();
        loc.selectItem();
        loc.enterDeliveryPIN();
        loc.capturePINLenAlert()
        loc.selectRingSize();
        po.createOrder();       
        
    })
})