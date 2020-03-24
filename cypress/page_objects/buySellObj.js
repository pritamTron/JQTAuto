export function buyJqtOrder(sts, dis){
    var discountPercent = '43.00'
    var JQT = '10'
    cy.wait(2000)
    cy.get('.ml-auto > :nth-child(1) > a').click().wait(2000)
    // cy.get('#buy-rate-input').type(discountPercent)
    // cy.get('#buy-amount-input').type(JQT)
    // cy.get('.buy-order > form > :nth-child(4) > .col-sm-9 > .form-bs-part > .btn').click()
    cy.get('tbody > :nth-child(1) > :nth-child(5)').then((elm)=>{
        let status = elm.text()
        cy.log(status)
        cy.writeFile('cypress/fixtures/buysellstatus.json',{Status : status})
    })
    cy.get('.col-md-12 > .inner-main-sec > .table-responsive > .table > tbody > :nth-child(1) > :nth-child(3)').then((value)=>{
        let disPer = value.text()
        var disPerc = disPer.substr(11, 5);
        cy.wait(1000).log(disPerc)
        // const dis = {DisPer: disPerc};
        cy.writeFile('cypress/fixtures/disPer.json', {DisPer: disPerc})
        // var data = cy.fixture('buysellstatus.json')
        // cy.log(data)
        // const final = Object.assign(data, {DisPer: disPerc})
        // cy.log(final)
        // var json = JSON.stringify(data)
        // cy.writeFile('cypress/fixtures/buysellstatus.json', json["disPerc"]="42", {flag : 'a+'}); 
        // var json2 = JSON.parse(json)
        // cy.log(json)
        // cy.log(json2)
    })
    if(sts= 'pending' && dis ==discountPercent){
        cy.log('Buy order posted successfully')
    }
    else{
        cy.log('Buy order not posted.')
    }
}