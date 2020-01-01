

describe('Login', function(){
    

    before(function() {
        cy.wait(2000)
        cy.login('rider15.ps@gmail.com','123Admin@')
    });

    beforeEach(function() {
        cy.wait(2000)
        cy.get('.ml-auto > :nth-child(4) > a').click()
        //cy.fixture('values.json').as('ticket')
        cy.get(':nth-child(6) > td > .second-inner > p').invoke('text').as('ticket')
    });

    it('Exchange to JQT', function(){
     cy.get('.ml-auto > :nth-child(4) > a').click()
     var tkt = this.ticket
     cy.log(tkt)
     cy.wait(2000)
     const enterTkt = 200
     cy.get('.form-control').type(enterTkt)
     cy.writeFile('cypress/fixtures/values.json',{ticketvalue123: tkt, enteredvalue123:enterTkt })
     cy.log(enterTkt)
     cy.get('.col-md-12 > .btn').click()
     if(enterTkt <= tkt){
        cy.get('.alert > div').contains('Requested Successfully!')
     }
     else{
        cy.get('.alert > div').contains('Your ticket balance is not enough!')
     }
    })
})


//store value
    //  cy.get(':nth-child(6) > td > .second-inner > p').then((elm)=>{
    //     // var ticket =
    //      cy.writeFile('cypress/fixtures/values.json', {ticketvalue :  elm.text()})
    //  })
     
    //  cy.get(':nth-child(6) > td > .second-inner > p').then((elm)=>{
    //      cy.log(elm.text())
    //  }) 
     //  cy.get('.form-control').then((elm)=>{
    //      cy.log(elm.text())
    //      cy.writeFile('cypress/fixtures/values.json',{ticketvalue :  elm.text(),enteredTicketValue  :enteredTkt})
    //  })  