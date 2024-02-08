class DashboardPage{
    //Web Elemets
    constructor(){

    }


    //Methods

    verifyUrl(url){
        cy.url().should('contain',url)
    }
}

export const dashboard = new DashboardPage()