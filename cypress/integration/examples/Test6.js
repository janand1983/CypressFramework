/// <reference types="Cypress" />

describe('My Second Test Suite', function() 
{

it('My FirstTest case',function() {

//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

//cy.get('div.mouse-hover-content').invoke('show')
cy.contains('Top').click({force: true})
// click({force: true})to click on hidden objects as some other element might be present on it
cy.url().should('include','top')
})


})




























