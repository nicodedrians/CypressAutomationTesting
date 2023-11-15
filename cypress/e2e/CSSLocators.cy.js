describe('CSS Locator', () => {

    it("Css Locator", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input.oxd-input oxd-input--active[class = 'username']").type("Admin") // id  tag is optional

        cy.get("[name = 'password']").type("admin123")

        cy.get("[type = 'submit']").click()

        cy.get("[class = 'oxd-text oxd-text--span oxd-main-menu-item--name']").first().click()

        cy.get("[class = 'oxd-text oxd-text--span']").contains("(37) Records Found")

        cy.title().should('eq', 'OrangeHRM')

        cy.get("[class = 'oxd-button oxd-button--medium oxd-button--secondary']").click()

        cy.get("[class = 'oxd-text oxd-text--span oxd-main-menu-item--name']").eq(1).click()

        

    })
})