/// <reference types="Cypress" />

describe('My Second Test Suite', function() 
{

it('My FirstTest case',function() {

//Check boxes
cy.visit("http://qaclickacademy.com/practice.php")
cy.get('#alertbtn').click()
cy.get('[value="Confirm"]').click()
//window:alert
// jquery property on to capture text from windows alert and confirm popup. 
cy.on('window:alert',(str)=>

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
                // jquery method to suppress an attribute by which it open in the same window
                // cypress doesnt support multi window as it is flaky

cy.url().should('include','qaclickacademy')

cy.go('back')




























}  )



}  )