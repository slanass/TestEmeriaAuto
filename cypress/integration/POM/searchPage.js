

export function searchSubmit(maxBudgetValue, locationValue){
        cy.get('[href="/louer"]').first().click({force:true})
        cy.wait(3000)
        cy.get('[type="submit"]').click({force:true})
        cy.wait(2000)
        cy.get('[id="propertyToggle"]').click({force:true})
        cy.wait(1000)
        cy.get('[class="p-checkbox-box"]').first().click({force:true})
        cy.wait(2000)
        cy.get('[id="price"]').type(maxBudgetValue)
        cy.get('[id="city"]').type(locationValue)
        cy.get('[role="option"]',{ timeout: 60000 , force: true}).first().click({force: true})
        cy.get('[class="p-button p-button-help ng-star-inserted"]').first().click({force:true})
        cy.wait(2000)   
}


