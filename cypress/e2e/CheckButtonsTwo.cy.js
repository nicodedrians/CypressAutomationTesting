
describe("Radio and Check Button", ()=> {

    it("Radio button assertion", ()=> {

        cy.visit("https://nxtgenaiacademy.com/demo-site/")

        // visibility of button
        cy.get("[ value = 'Male']").should('be.visible')
        cy.get("[ value = 'Female']").should('be.visible')
        cy.get("[ value = 'Other']").should('be.visible')

        // Check the radio  button
        cy.get("[ value = 'Male']").check().should('be.checked')
        cy.get("[ value = 'Female']").should('not.be.checked')
        cy.get("[ value = 'Other']").should('not.be.checked')
    })

    it("Check button assertion", ()=> {

        cy.visit("https://nxtgenaiacademy.com/demo-site/")

        // visibility of element
        cy.get("[ value = 'Selenium WebDriver']").should('be.visible')
        // Selecting checkbox
        cy.get("[ value = 'Selenium WebDriver']").check().should('be.checked')
        // Unselecting checkbox
        cy.get("[ value = 'Selenium WebDriver']").uncheck().should('not.be.checked')

        // Selecting all checkbox
        // multiple object can be check 
        cy.get("input[type = 'checkbox']").check().should('be.checked')
        // Uncheck checkbox
        cy.get("input[type = 'checkbox']").uncheck().should('not.be.checked')

        // Select first and last checkbox
        cy.get("input[type = 'checkbox']").first().check().should('be.checked')

        cy.get("input[type = 'checkbox']").last().check().should('be.checked')
    })
})