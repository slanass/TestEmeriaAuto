

export function checkLocalisation(localisation){    
    return new Promise((resolve,reject)=>{
     cy.get('[class="foncia-card-place"]').each((item, index) =>{
         console.log(index)
         let anotheArea = false
         cy.
         wrap(item).then((item) => {
             var area = item.text()
                console.log('Area is ....' +area)
                if(expect(area).to.contain(localisation) == true){
                    anotheArea = false;
                     
                 }else{
                    anotheArea = true;
                 }  
             })
             console.log('final value result Area ' + anotheArea)
              if (anotheArea === true){
             resolve();
 
             }
             else{
             reject();
 
         }  
 
     })
     
 })
 }
 

export function checkPriceMax(maxBudgetValue){    
   return new Promise((resolve,reject)=>{
    cy.get('[class="foncia-card-price"]').each((item, index) =>{
        console.log(index)
        let maxPassed = false
        cy.
        wrap(item).then((item) => {
            let str1 = item.text().split(',') 
            var firstWords = [];
            for (var i=0;i<str1.length;i++)
            {
              var words = str1[i].split(" ");
              firstWords.push(words[0]);
            }                  
            
            let budget = firstWords[0].replace(/\D/g, "");
                  console.log('here we go.....' + budget)
                  if(expect(budget <= maxBudgetValue) == true){
                    maxPassed = false;
                    
                }else{
                    maxPassed = true;
                    

                }  
            })
                console.log('final value result' + maxPassed)
             if (maxPassed === true){
            resolve();

            }
            else{
            reject();

        }  

    })
    
})
}





