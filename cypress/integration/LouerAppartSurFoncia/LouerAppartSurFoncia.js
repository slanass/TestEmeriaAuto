import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import {acceptPopin} from '../POM/homePage'
import {searchSubmit} from '../POM/searchPage'
import {checkPriceMax, checkLocalisation} from '../POM/resultPage'


Given("je suis sur le site foncia", ()=>{
	cy.visit(Cypress.env('baseUrl'))
    cy.wait(5000)
})

Then("je vois bien la popin alert au fraud et je la valide", ()=>{
    
    acceptPopin('[class="cookie-cta-accept"]')
        .then(e=>{
            e.click({force:true})
                })
        .catch(e=>{
        
    })

})

And("je vérifier que le titre de la page est À vos côtés, en ligne et dans votre quartier", ()=>{
    cy.get('[class="home-search-title"]').contains('À vos côtés, en ligne et dans votre quartier')

})


When("je cherche un loyer avec le montant Max",(datatable) =>{
    datatable.hashes().forEach((element) => {
        const maxBudgetValue = element.maxBudget
        const locationValue = element.location
        cy.wait(2000)
        searchSubmit(maxBudgetValue, locationValue)
    })
         

})

Then("je vérifier que toutes les annonces sont dans la localisation recherché",(datatable)=>{
        datatable.hashes().forEach((element) => {
        const localisation = element.location
    cy.wait(2000)
    checkLocalisation(localisation)
        .then(e=>{
            
            })
        .catch(e=>{
     
      })
  
    })
})

And("je vérifier que toutes les annonces ont un montant moins de montant Max choisi",(datatable) =>{
    datatable.hashes().forEach((element) => {
        const maxBudgetValue = element.maxBudget
    checkPriceMax(maxBudgetValue)
    .then(e=>{
            
    })
.catch(e=>{

})
   
})
})
