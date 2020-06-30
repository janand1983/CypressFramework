/// <reference types="Cypress" />

describe('My Second Test Suite', function() 
{

it('My FirstTest case',function() {

//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {

    const text=$e1.text()
    if(text.includes("Python"))
    {
            
      // identify all tr tags in a table and particular column here they use only 2 column  tr td:nth-child(2)
      // .next() is used to get the sibling not the child
        cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
        {
         const priceText=   price.text()
         expect(priceText).to.equal('26')
        })
    }

})


})


})




























