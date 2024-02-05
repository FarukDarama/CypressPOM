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
    }




    // Metotlar
    writeFirstName() {
        cy.get(this.firstNameInput).type('Gürkay')
    }

    writeLastName() {
        cy.get(this.lastNameInput).type('Birinci')
    }

    writeDateOfBirth() {
        cy.get(this.dateOfBirthInput).type('1985-09-15')
    }

    writeAddress() {
        cy.get(this.addressInput).type('Seligenstadt Hessen')
    }

    writePostCode() {
        cy.get(this.postCodeInput).type('63500')
    }

    writeCity() {
        cy.get(this.cityInput).type('Offenbach')
    }

    writeState() {
        cy.get(this.stateInput).type('Offenbach')
    }
    
    selectCountry() {
        cy.get(this.countrySelect).select('Germany')
    }

    writePhone() {
        cy.get(this.phoneInput).type('01789067876')
    }

    writeEmail() {
        cy.get(this.emailInput).type('faker@faker.com')
    }

    writePassword() {
        cy.get(this.passwordInput).type('123456')
    }

    clickRegister(){
        cy.get(this.registerButton).click();
    }
}
export const register = new RegisterPage()