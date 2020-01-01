
export function loginobj(){
        cy.visit('https://dev.jqt01.com')
        cy.get(':nth-child(2) > .btn').click(),
        cy.get('#email').type('rider15.ps@gmail.com'),
        cy.get('#password').type('123Admin@'),
        cy.get('form > :nth-child(2) > .btn').click()
}

