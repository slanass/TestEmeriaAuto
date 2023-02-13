
export function acceptPopin(ele){
    return new Promise((resolve,reject)=>{
        cy.get('body').find( ele ).its('length').then(res=>{
            if(res > 0){
                cy.get(ele).click().wait(2000);
                resolve();
            }else{
                reject();
            }
        });
    })
}

