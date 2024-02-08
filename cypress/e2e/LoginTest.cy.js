const { dashboard } = require("../support/pages/dashboard_page");
const { login } = require("../support/pages/login_page");

describe('Login Test Suite', () => {
let loginData;
  before(() => {
    cy.fixture('login_data').then((data) => {
        loginData = data
      })
  });

    beforeEach(()=>{
        cy.visit('/'+Cypress.env('login'));
    });

    it('TC01-Login test with valid data', () => { //Pozitive Test
       login.writeEmail(loginData.validEmail)
       login.writePassword(loginData.validPassword)
       login.clickLoginButton()
       dashboard.verifyUrl(Cypress.env('dashboard'))
       
    });

    it('TC02-Login tets with invalid email', () => { //Negative Test
       login.writeEmail(loginData.invalidEmail);
       login.writePassword(loginData.validPassword); 
       login.clickLoginButton()
       login.verifyInvalidEmailOrPasswordMessage(loginData.invalidEmailOrPasswordMessage)

    });

    it.only('TC03-Login tets with invalid password', () => { //Negative Test
        login.writeEmail(loginData.validEmail);
        login.writePassword(loginData.invalidPassword); 
        login.clickLoginButton()
        login.verifyInvalidEmailOrPasswordMessage(loginData.invalidEmailOrPasswordMessage)
 
     });

     it.only('TC04-Login tets with invalid data', () => { //Negative Test
        login.writeEmail(loginData.invalidEmail);
        login.writePassword(loginData.invalidPassword); 
        login.clickLoginButton()
        login.verifyInvalidEmailOrPasswordMessage(loginData.invalidEmailOrPasswordMessage)
 
     });
});