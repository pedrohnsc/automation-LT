Cypress.Commands.add('login', (email, password) => { 
    cy.get('[data-test="username"]').type(email, { log: false })
    cy.get('[data-test="password"]').type(password, { log: false })
    cy.get('[data-test="login-button"]').click()
})