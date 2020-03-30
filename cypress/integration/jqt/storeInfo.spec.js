import * as storeInfo from '../../page_objects/storeInfoObj'

describe('Store info', function() {

//     before(function() {
//         cy.wait(2000)
//         cy.Storelogin('hyper15@mailinator.com','123Admin@')
//    });

   beforeEach(() => {
        cy.Storelogin('hyper15@mailinator.com','123Admin@')
        storeInfo.visitStoreInfo()
        // cy.fixture('publishStatus.json').as('publishStatus')
   });

   it('Fill Store Info', function(){
        // storeInfo.visitStoreInfo()
        storeInfo.fillBasicInfo()
        // storeInfo.fillBankInfo()
        // storeInfo.fillLocationInfo()
        // storeInfo.fillCustomerReview()
        // storeInfo.editCustomerReview()
        // storeInfo.deleteCustomerReivew()
        // storeInfo.addMenu()
        storeInfo.deleteMenu()

   })
   it('Fill Bank Info', () => {
       storeInfo.fillBankInfo()
   });
   
   it('Fill Location',() => {
        storeInfo.fillLocationInfo()
   })

   it('Fill Customer Reviwe', () => {
       storeInfo.fillCustomerReview()
       storeInfo.editCustomerReview()
       storeInfo.deleteCustomerReivew()
   });

   it('Add menu', () => {
       storeInfo.addMenu()         
   });

    // it('Store Publish or Unpublish', function(){
    //    // storeInfo.loginCheck()
    //    //cy.login('hyper15@mailinator.com','123Admin@')
    //    cy.log('hum idar hay')
    //    storeInfo.PublishInfoToggle()
    //    if(this.publishStatus.publishSts == "publish"){
    //         cy.log('status publish cha')
    //         storeInfo.unpublishStore()
    //         cy.log('status aba unpublish vayo')
    //     }
    //     else if(this.publishStatus.publishSts == "unpublish"){
    //         cy.log('status unpublish cha.')
    //         storeInfo.publishStore()
    //         cy.log('status aba publish vayo')
    //     }
    //     else{
    //         cy.log('Publish Status did not matched.')
    //     }
    // });
    
    // it('Change Publish Status', function(){
    //     if(this.publishStatus.publishSts == "publish"){
    //         cy.log('status publish cha')
    //         storeInfo.unpublishStore()
    //     }
    //     else if(this.publishStatus.publishSts == "unpublish"){
    //         cy.log('status unpublish cha.')
    //         storeInfo.publishStore()
    //     }
    //     else{
    //         cy.log('Publish Status did not matched.')
    //     }
    // });

    // it('getagain', () => {
    //     cy.visit('dev-admin.jqt01.com')
    //     cy.get('#user-Username').type('admin')
    //     cy.get('#user-CurrentPassword').type('123Admin@')
    //     cy.get('.btn').click()
    //     cy.login('hyper15@mailinator.com','123Admin@')
    // });
});