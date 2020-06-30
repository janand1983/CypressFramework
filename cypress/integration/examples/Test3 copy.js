
/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
//Check boxes
cy.visit("http://qaclickacademy.com/practice.php")
cy.get('#alertbtn').click()
cy.get('[value="Confirm"]').click()
// ** Cypress by default accepts the alerts.
//window:alert
cy.on('window:alert',(str)=>
// ** on operator to get text from the popup
{
    //Mocha
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})
 
cy.on('window:confirm',(str)=>
{
    //Mocha
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})
 
cy.get('#opentab').invoke('removeAttr','target').click()
                // jquery to remove attribute and open in same page
 
cy.url().should('include','qaclickacademy')
 
cy.go('back')
// to navigate back page
 
 
}  )
 
 
 
}  )
