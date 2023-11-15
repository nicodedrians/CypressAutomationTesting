describe('Test', () => {

    it("Test", () => {

        cy.visit("https://www.bukalapak.com/")

        cy.get("#v-omnisearch__input").type("Playstation 5")

        cy.get(".v-omnisearch__submit").click()

        // cy.get("[class = 'bl-text--subheading-3 bl-text bl-heading bl-heading--h6']").contains("\"Playstation 5\"")

        // cy.get("[class = 'bl-checkbox te-filter-popular-1 mb-8']").click()

        // cy.get("[class = 'svg-icon svg-fill']").eq(10).click()

        // cy.get("[placeholder = 'min']").type("500000")

        // cy.get("[placeholder = 'maks']").type("1000000")

        cy.get("[class = 'bl-flex-item mb-8']").eq(0).click()

        cy.get("[class = 'c-main-product__action__buy bl-button bl-button--primary bl-button--medium']").click()

    })

})