var mimi = require('mime-types')
import 'cypress-file-upload';
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

export function visitStoreInfo(){
    cy.get('.fa-caret-down').click()
    cy.get('[href="/store-info"]').click()
}

export function fillBasicInfo(){
    
    cy.get(':nth-child(2) > .title-head > .edit-del > button').then((data)=>{
        data.click()
    }).wait(2000)


    const fileName = 'image1.jpg'
    cy.log(mimi.lookup(fileName))   
    const fileType = 'image/jpeg'
    const fileInput = '#inputGroupFile01'
    // cy.uploadFile(fileName, fileType, fileInput) 
    cy.fixture(fileName).then(fileContent => {
        cy.get('#inputGroupFile01').upload({ fileContent, fileName, mimeType: 'image/jpeg' });
        cy.wait(2000)      
    });

    //select category
    cy.get(':nth-child(2) > form > :nth-child(1) > .join-add > :nth-child(2) > .col-lg-8 > .form-control').select('1',{ force: true })
    // cy.get(':nth-child(2) > form > :nth-child(1) > .join-add > :nth-child(2) > .col-lg-8 > .form-control').select('5').should('have.value', '5')
    
    //input URL
    cy.get(':nth-child(2) > form > :nth-child(1) > .join-add > :nth-child(3) > .col-lg-8 > .form-control').wait(2000).clear().type('https://www.google.com')

    //input business hour
    cy.get(':nth-child(2) > form > :nth-child(1) > .join-add > :nth-child(4) > .col-lg-8 > .form-control').clear().type('Automated Business hour\n 09:00 AM to 06:00 PM \n Monday to Friday')
    //input name
    cy.get(':nth-child(2) > form > :nth-child(1) > :nth-child(2) > :nth-child(1) > .col-lg-8 > .form-control').clear().type('Pritam Store Edited Auto')
    
    //input phone number
    cy.get('#phone').clear().type('9849809797')

    //input introduction
    cy.get(':nth-child(2) > :nth-child(4) > .col-lg-8 > .form-control').clear().type ('Automated Introduction on of the Store named\n Pritam Store Edited Auto')
    
    //input city
    cy.get(':nth-child(2) > :nth-child(5) > .col-lg-8 > .form-control').clear().type('Lalitpur')

    //input address
    cy.get(':nth-child(6) > .col-lg-8 > .form-control').clear().type('Jwagal, Kupondol')
    cy.get('.col-lg-8 > .btn-primary').click().wait(5000)
    
}

export function fillBankInfo(){
   // cy.get('#root > div > div:nth-child(3) > div > div > button').click()
    cy.get(':nth-child(3) > .title-head > .edit-del > button').then((data)=>
    data.click()
    )
    cy.get('.join-add > :nth-child(1) > .col-lg-8 > .form-control').clear().type('My Bank automated')
    cy.get(':nth-child(3) > form > :nth-child(1) > .join-add > :nth-child(2) > .col-lg-8 > .form-control').clear().type('Jwagal')
    cy.get('input[name="account_type"]').clear().type('Saving')
    cy.get('#root > div > div:nth-child(3) > form > div > div.col-lg-6.join-add > div:nth-child(4) > div > input').clear().type('0111000111000').wait(1000)
    cy.get('input[name="account_holder_name"]').clear().type('Pritam Shakya 123')
    cy.get('input[name="bank_address"]').clear().type('Jwagal')
    cy.get('input[name="swift_code"]').clear().type('Swift code automated')
    //cy.get('.col-lg-8 > .btn-primary').click().wait(2000)
}

export function fillLocationInfo(){
    cy.get(':nth-child(4) > .title-head > .edit-del > button').then((data)=>
    data.click())
    cy.get('[style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"]').click('topRight')
    cy.get('.col-lg-8 > .btn-primary').click({multiple:true})
}

export function fillCustomerReview(){
    cy.get(':nth-child(5) > .title-head > .edit-del > button').then((data)=>
        data.click()
    )
    cy.get('button[class="btn btn-primary mb-1 mr-3 mt-1"]').click()

     cy.get("#root > div > div:nth-child(5) > div.row > div").then((data)=>{
        var getcount=data[0].children.length 
        var count = getcount-3
        cy.log(count)
        cy.get(':nth-child('+count+') > :nth-child(1) > .col-lg-8 > .form-control').type('This is automated customer review.')
        cy.get(':nth-child('+count+') > :nth-child(2) > .col-lg-8 > .form-control').type('Automated Customer')
        cy.get('#root > div > div:nth-child(5) > div.row > div > div:nth-child('+getcount+') > div > button.btn.btn-primary.mb-1.mr-3').click()
    })
    
}

export function editCustomerReview(){
    cy.wait(5000)
    cy.get('#root > div > div:nth-child(5) > div.title-head.d-flex.justify-content-between > div > button').click()
    cy.get('.col-md-12 > :nth-child(1) > :nth-child(1) > .col-lg-8 > .form-control').clear().type('This is automated customer review edited.')
    cy.get('.col-md-12 > :nth-child(1) > :nth-child(2) > .col-lg-8 > .form-control').clear().type('Automated Customer Edited.').wait(2000)
    cy.get("#root > div > div:nth-child(5) > div.row > div").then((data)=>{
        var getcount=data[0].children.length 
    cy.get('#root > div > div:nth-child(5) > div.row > div > div:nth-child('+getcount+') > div > button.btn.btn-primary.mb-1.mr-3').click()
})
}

export function deleteCustomerReivew(){
    cy.wait(5000)
    cy.get('#root > div > div:nth-child(5) > div.title-head.d-flex.justify-content-between > div > button').click().wait(1000)
    cy.get(':nth-child(1) > :nth-child(1) > .col-md-2 > button').click()
    cy.get("#root > div > div:nth-child(5) > div.row > div").then((data)=>{
        var getcount=data[0].children.length 
    cy.get('#root > div > div:nth-child(5) > div.row > div > div:nth-child('+getcount+') > div > button.btn.btn-primary.mb-1.mr-3').click()
})
}

export function addMenu(){
    cy.wait(3000)
    //click add new button
    cy.get('.title-head > .btn').click()

    //input menu title
    cy.get('#title').type('Automated title')

    //input price
    cy.get('#price').clear().type('100',{force:true})
    // $("body > div:nth-child(7) > div > div.modal.fade.show > div > div > form > div.modal-body > div:nth-child(2) > input").value=5
    // cy.get('body > div:nth-child(7) > div > div.modal.fade.show > div > div > form > div.modal-body > div:nth-child(2) > input').then((data)=> {
    //     data.value=5
    //     
    // })

    // upload image
    const fileName = 'test.png'
    cy.log(mimi.lookup(fileName))   
    const fileType = mimi.lookup(fileName)
    cy.log(fileType)
    const fileInput = '#image'
    // cy.uploadFile(fileName, fileType, fileInput) 
    cy.fixture(fileName).then(fileContent => {
        cy.get(fileInput).upload({ fileContent, fileName, mimeType: fileType });
        cy.wait(2000)      
    });

    //click save button
    cy.get('.modal-footer > .btn-primary').click()
}

export function deleteMenu(){
    cy.wait(2000)
    cy.get(':nth-child(1) > .td-action > .edit-del > .del-part').click()
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

