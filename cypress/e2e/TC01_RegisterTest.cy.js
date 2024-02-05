
import { register } from "../support/pages/register_page"
import { login } from "../support/pages/login_page"
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://practicesoftwaretesting.com/#/auth/register');
    register.writeFirstName()
    register.writeLastName()
    register.writeDateOfBirth()
    register.writeAddress()
    register.writePostCode()
    register.writeCity()
    register.writeState()
    register.selectCountry()
    register.writePhone()
    register.writeEmail()
    register.writePassword()
    register.clickRegister()
    
  })
})