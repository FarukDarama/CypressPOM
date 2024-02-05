class LoginPage{
    //Web Elements
    constructor (){
        this.pageTitle ='h3'
    }

    //Methods
    verifyPageTitle(){
        cy.get(this.pageTitle).should('have.text','Login');
    }
}

export const login =new LoginPage();