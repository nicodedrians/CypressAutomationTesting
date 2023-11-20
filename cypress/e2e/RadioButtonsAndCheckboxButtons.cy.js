

describe("Check UI Elements", () => {

    it("Checking Radio Buttons", () => {

        cy.visit("https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm")

        cy.get("[name = 'firstname']").type("Nico")

        cy.get("[name = 'lastname']").type("Dedrian")

        cy.get("[value = 'Male']").should('be.visible')
        cy.get("[Value = 'Female']").should('be.visible')

        cy.get("[value = 'Male']").check().should('be.checked')
        cy.get("[value = 'Female']").should('not.be.checked')

    })
})