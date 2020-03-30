import * as exToJQTObj from '../../page_objects/exchangeToJQTObj'

describe('Exchange TO JQT', function(){
    before(function(){
        cy.login('rider15.ps@gmail.com','123Admin@').wait(5000)
    });
    beforeEach(function() {
        cy.fixture('equivalentJQT.json').as('equiJQT')
    });
    it('Should exchange to JQT', function(){
        // exToJQTObj.getExchangeHistory()
        const JQT = this.equiJQT
        exToJQTObj.requestExchange(JQT)
    });

    it('should convert JQT', function(){
        cy.CMSLogin()
        const JQT = this.equiJQT
        exToJQTObj.convertJQT(JQT)
    })

    it('check status', function(){
        cy.login('rider15.ps@gmail.com','123Admin@')
        exToJQTObj.checkStatus()
    })
})