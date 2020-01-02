export function requestJQT(){
    cy.get('.ml-auto > :nth-child(5) > a').click()
    cy.get('.form-control').type('12')
    cy.get('.offset-lg-6 > .btn').click().wait(10000)
    cy.get('.alert > div').should('contain','Your transaction has been submitted successfully and will be processed soon. Transaction hash:')
}

export function sendJQT(recSts){
    cy.get('#toggle-sidebar').click().wait(1000)
    cy.get(':nth-child(9) > a > .span-link').click()
    // waiting 15 seconds for status to change to received.
    cy.wait(15000).reload()
    cy.get(':nth-child(1) > .text-capitalize').then((elm)=>{
        let status=elm.text()   
        cy.log(status)  
        cy.writeFile('cypress/fixtures/status.json',{Status : status})
    })

    cy.log('status above if else',recSts)
    if(recSts = "received"){
        cy.log(recSts)
        cy.log('status received')
        cy.get('tbody > :nth-child(1) > :nth-child(1) > input').click()
        cy.get('.text-right > .btn').click()
        cy.get('#\\30 xc6d29ddbb244be41cfb53ac725963b54a283c006').click()
        cy.get('.modal-footer > :nth-child(3)').click()
        cy.get('.alert-success > p').should('contain', 'Token successfully sent to 1 request')
    }
    else{
        cy.log('status didnt matched to "Received" so cannot send JQT to user.')
    }
    
}