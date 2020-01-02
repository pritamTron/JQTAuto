import * as buyJQTobj from '../../page_objects/buyJQT'

describe('Buy JQT', function(){
    before(function(){
        cy.login('rider15.ps@gmail.com', '123Admin@')
    })
    beforeEach(function(){
        cy.fixture('status.json').as('sts')
    })
    it('JQT request', function(){
        cy.log('i am in')
        buyJQTobj.requestJQT()
    })
    it('send JQT', function(){
        var sts =this.sts.Status
        cy.log('my ',sts)
        cy.CMSLogin()
        buyJQTobj.sendJQT(sts)
    })
})