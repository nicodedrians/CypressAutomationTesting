describe('Suite Name', () => {

  it('Test1 - Verify Title-Positive', () => {

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    cy.title().should(
        'eq', 'OrangeHRM'
    )
    // steps
  })
})
