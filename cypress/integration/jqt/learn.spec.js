
describe('test', function() {
    beforeEach(function(){
        cy.login('rider15.ps@gmail.com', '123Admin@')
        cy.get('.fa-caret-down').click()
        cy.get('[href="/profile"]').click()
        cy.get('.col-prf-left > :nth-child(3) > .col-lg-8 > p').invoke('text').as('userid')
        cy.fixture('learn.json').as('abc')
    })

    it('hello', function(){
        var userID = this.userid
        cy.log('asd',userID)
        cy.task('checkFileExist', 'cypress/fixtures/learn.json').then(sts => {
            if(!sts){
                cy.writeFile('cypress/fixtures/learn.json',[{ID : userID}])
            }
            else{
                cy.readFile('cypress/fixtures/learn.json').then(data => {
                    if(Array.isArray(data)){
                        data.push({IDd : userID});
                        var fileData = data;
                       
                    }
                    else{
                        var fileData = [data,{IDd : userID}]
                       
                    }
                    cy.writeFile('cypress/fixtures/learn.json', fileData)
                    cy.log(fileData)
                })
            }
        })
    })

    it('abcd', function(){
        var a = this.abc[4].IDd
        cy.log(a)
    })
});