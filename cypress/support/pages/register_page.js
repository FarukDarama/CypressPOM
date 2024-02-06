class RegisterPage{
    // Web Elementleri
    constructor() {
        this.firstNameInput = '#first_name';
        this.lastNameInput = '#last_name';
        this.dateOfBirthInput ='#dob';
        this.addressInput = '#address';
        this.postCodeInput ='#postcode';
        this.cityInput = '#city';
        this.stateInput ='#state';
        this.countrySelect ='#country';
        this.phoneInput='#phone'
        this.emailInput='#email'
        this.passwordInput='#password'
        this.registerButton='[type="submit"]'
        this.emailAlreadyExistMessage ='.help-block'
    }




    // Metotlar
    writeFirstName(firstName) {
        cy.get(this.firstNameInput).type(firstName)
    }

    writeLastName(lastName) {
        cy.get(this.lastNameInput).type(lastName)
    }

    writeDateOfBirth(dateOfBirth) {
        cy.get(this.dateOfBirthInput).type(dateOfBirth)
    }

    writeAddress(address) {
        cy.get(this.addressInput).type(address)
    }

    writePostCode(postCode) {
        cy.get(this.postCodeInput).type(postCode)
    }

    writeCity(city) {
        cy.get(this.cityInput).type(city)
    }

    writeState(state) {
        cy.get(this.stateInput).type(state)
    }
    
    selectCountry(country) {
        cy.get(this.countrySelect).select(country)
    }

    writePhone(phone) {
        cy.get(this.phoneInput).type(phone)
    }

    writeEmail(email) {
        cy.get(this.emailInput).type(email)
    }

    writePassword(password) {
        cy.get(this.passwordInput).type(password)
    }

    clickRegister(){
        cy.get(this.registerButton).click();
    }

    verifyEmailAlreadyExistMessage(errorMessage){
     cy.get(this.emailAlreadyExistMessage).should('have.text',errorMessage)
    }
}
export const register = new RegisterPage()