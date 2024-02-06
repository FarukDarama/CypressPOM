
import { register } from "../support/pages/register_page"
import { login } from "../support/pages/login_page"
import { faker } from "@faker-js/faker";
describe('register_test', () => {
  let registerData;
  let loginData;
  let fakeMail;
  before(() => {
      cy.fixture('register_data').then((data)=>{
        registerData=data
      })

      cy.fixture('login_data').then((data)=>{
        loginData=data
      })

      fakeMail=faker.internet.email();
  });

  beforeEach(() => {
    cy.visit('/'+Cypress.env('register'));
  });

  it('TC01- Register test with valid datas', () => {
    
    register.writeFirstName(registerData.firstName)
    register.writeLastName(registerData.lastName)
    register.writeDateOfBirth(registerData.dateOfBirth)
    register.writeAddress(registerData.address)
    register.writePostCode(registerData.postCode)
    register.writeCity(registerData.city)
    register.writeState(registerData.state)
    register.selectCountry(registerData.country)
    register.writePhone(registerData.phone)
    register.writeEmail(fakeMail)
    register.writePassword(registerData.password)
    register.clickRegister()
    login.verifyPageTitle(loginData.pageTitle)
    
  })

  it('TC03- Register test with same email data', () => {
    register.writeFirstName(registerData.firstName)
    register.writeLastName(registerData.lastName)
    register.writeDateOfBirth(registerData.dateOfBirth)
    register.writeAddress(registerData.address)
    register.writePostCode(registerData.postCode)
    register.writeCity(registerData.city)
    register.writeState(registerData.state)
    register.selectCountry(registerData.country)
    register.writePhone(registerData.phone)
    register.writeEmail(fakeMail)
    register.writePassword(registerData.password)
    register.clickRegister()
    register.verifyEmailAlreadyExistMessage(registerData.emaliAlreadyExistMessage)
  });
})