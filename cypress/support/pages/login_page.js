class LoginPage{
    //Web Elements
    constructor (){
        this.pageTitle ='h3'
    }

    //Methods
    verifyPageTitle(pageTitle){
        cy.get(this.pageTitle).should('have.text',pageTitle);
    }
}

export const login =new LoginPage();