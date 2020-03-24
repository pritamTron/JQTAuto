import * as buySellObj from '../../page_objects/buySellObj'

describe("Buy JQT", function(){
    before(function(){
        cy.login('rider15.ps@gmail.com','123Admin@')
    })
    beforeEach(function(){
        cy.fixture('buysellstatus.json').as('sts')
        cy.fixture('disPer.json').as('dis')
    })
    it('Buy', function(){
        var status = this.sts.Status
        var discount = this.dis.DisPer
        buySellObj.buyJqtOrder(status, discount)
        
    })
})