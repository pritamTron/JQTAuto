export function PublishInfoToggle(){
    cy.get('.fa-caret-down').click()
    cy.get('[href="/store-info"]').click()
    cy.get(':nth-child(2) > .title-head > .edit-del > button').click()
    // cy.get(':nth-child(2) > form > :nth-child(1) > :nth-child(2) > :nth-child(1) > .col-lg-8 > .form-control').click()
    // cy.fixture('values.json').as('storeName')
    //     cy.get(':nth-child(2) > form > :nth-child(1) > :nth-child(2) > :nth-child(1) > .col-lg-8 > .form-control').invoke('text').as('storeName')
    //     var strName = this.storeName
    //     cy.log(strName)
    cy.wait(2000)
    
    // cy.get('.slider').click()
    // cy.get('.col-lg-8 > .btn-primary').click()
    //cy.visit('https://dev.jqt01.com/store-info')
    cy.window().then(win => {
        var currentToken = win.localStorage.getItem('access_token');
        cy.log(currentToken, "currentToken");
        cy.wait(2000)
    var options = {
        url : 'https://dev-api.jqt01.com/api/v1/shop',
        method: 'GET',
        headers : { 'Authorization': "Bearer " + currentToken },
        failOnStatusCode : false
    }
    cy.request(options).then((apidata)=>{
        cy.log(apidata.body.data.status)
        var publishStatus = apidata.body.data.status
        cy.writeFile('cypress/fixtures/publishStatus.json',{publishSts : publishStatus})
    })
})
}

export function unpublishStore(){
    cy.get('.slider').click()
    cy.get('.col-lg-8 > .btn-primary').click()
}

export function publishStore(){
    cy.get('.slider').click()
    cy.get('.col-lg-8 > .btn-primary').click()
}

export function checkStoreInList(){
    cy.get('.ml-auto > :nth-child(3) > a').click()
    cy.wait(2000)
    cy.get(':nth-child(3) > .form-group > #inputAddress').type(storeName)
    cy.get(':nth-child(2) > .btn-primary').click()

}



// export function loginCheck(){
//     cy.visit('https://dev.jqt01.com/')
//     cy.window().then(win => {
//         var currentToken = win.localStorage.getItem('access_token');
//         cy.log(currentToken, "currentToken");
//         cy.wait(2000)
//         var option = {
//             url: 'https://dev.jqt01.com/',
//             method: 'GET',
//             failOnStatusCode: false,
//         }
//         //Token null or not
//         if (currentToken != null) { // Logged In User
//             let token = currentToken;
//             option.headers = { 'Authorization': "Bearer " + token }
//             cy.request(option).then((elm) => {
//                 cy.log(elm, option)
//                 cy.log('logged status', elm.status)
//                 cy.log("confuse vaiyo hai")
//             })
//         }else{
//             cy.log('outer')
//         }
            
//     })
// }

