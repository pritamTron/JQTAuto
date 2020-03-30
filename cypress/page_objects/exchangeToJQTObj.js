// get data from api and store in json file.
//  export function getExchangeHistory(){
//     cy.window().then(()=>{
//         const accessToken = localStorage.getItem('access_token')
//         cy.wait(2000).log("mytoken : ", accessToken)
//         cy.get('.ml-auto > :nth-child(4) > a').click()
//         var option ={
//             url : "https://dev-api.jqt01.com/api/v1/point/history?type=from_ticket&page=",
//             method: 'GET',
//             failOnStatusCode: false,
//             headers : {'Authorization': "Bearer " + accessToken}
//         }
//         cy.request(option).then((apidata)=>{
//             //console.log(apidata)
//             cy.writeFile('cypress/fixtures/exchangeHistory.json',apidata)
//         })
//     })   
// }


export function requestExchange(){
    cy.get('.ml-auto > :nth-child(4) > a').click()
    const point = 5
    cy.get('.form-control').type(point).wait(1000)
    
    cy.get(':nth-child(3) > .form-group > .col-lg-8 > p').invoke('text').then((equiJQT)=>{
        const equiJQTa = equiJQT.substr(0,10);
        cy.log(equiJQTa)

        cy.writeFile('cypress/fixtures/equivalentJQT.json', equiJQTa)
    })

    cy.get('.col-md-12 > .btn').click()
    // getExchangeHistory();
}

export function convertJQT(eJQT){
    cy.get(':nth-child(11) > .arw > .span-link').click().wait(1000)
    cy.get('#conversion > :nth-child(2) > a').click().wait(1000)
    cy.get('tbody > :nth-child(1) > :nth-child(1) > input').click()
    cy.get('.mt-3 > .btn').click().wait(3000)
    cy.get('#\\30 xc6d29ddbb244be41cfb53ac725963b54a283c006').click().wait(1000)
    cy.get('.modal-footer > :nth-child(3)').click().wait(2000)
}

export function checkStatus(){
    cy.wait(1000)
    cy.get('.ml-auto > :nth-child(4) > a').click()
    cy.wait(30000).reload()
    cy.get('tbody > :nth-child(1) > :nth-child(6)').then((data)=>{
        var status = data.text()
        cy.log(status)
        if(status === "success"){
            cy.log("success i guess. :P")
        }
    })
    //cy.get()
}