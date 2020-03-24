// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("Storelogin", function(username,password){
    cy.visit('https://dev.jqt01.com')
    cy.get(':nth-child(2) > .btn').click(),
    cy.get('#email').type(username),
    cy.get('#password').type(password),
    cy.get('form > :nth-child(2) > .btn').click()
})

Cypress.Commands.add("login", function(username,password){
    cy.visit('https://dev.jqt01.com/')
    cy.window().then(win => {
        var currentToken = win.localStorage.getItem('access_token');
        cy.log(currentToken, "currentToken");
        cy.wait(2000)
        var option = {
            url: 'https://dev-api.jqt01.com/api/v1/shop',
            method: 'PUT',
            failOnStatusCode: false,
        }

        //Token null or not
        if (currentToken != null) { // Logged In User
            let token = currentToken;
            header = {'Authorization' : "Bearer" + token}
            cy.log("if vitra xu hai")
        }else{
            cy.get(':nth-child(2) > .btn').click(),
            cy.get('#email').type(username),
            cy.get('#password').type(password),
            cy.get('form > :nth-child(2) > .btn').click()
            cy.log('else vitra chu')
        }   
    })
})
Cypress.Commands.add('CMSLogin',()=>{
    cy.visit('https://dev-admin.jqt01.com')
    cy.get('#user-Username').type('admin')
    cy.get('#user-CurrentPassword').type('123dmin@')
    cy.get('.btn').click()
    .url()
    .should('contain','/system')
    .wait(2000)
})

// Cypress.Commands.add("CMSLogin", function(Uname,Pass){
//     cy.visit('https://dev-admin.jqt01.com')
//     cy.get
// })

Cypress.Commands.add('uploadFile', (fixtureFileName, inputSelector, mimeType = '') => {
    return cy.get(inputSelector).then(subject => {
        return cy.fixture(fixtureFileName, 'base64')
            .then(Cypress.Blob.base64StringToBlob)
            .then(blob => {
                const el = subject[0];
                const nameSegments = fixtureFileName.split('/');
                const name = nameSegments[nameSegments.length - 1];
                const testFile = new File([blob], name, { type: mimeType });
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(testFile);
                el.files = dataTransfer.files;
                el.dispatchEvent(new Event('change'));
                return subject;
            })
            .then(_ => cy.wait(1000));
    });
});