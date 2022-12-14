/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

describe('Add a product to the cart and go to checkout', () => {

    const itemName = '.inventory_item_name'

    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'))
        cy.login(Cypress.env('user'), Cypress.env('password'))
    })

    it('Add any product to the cart and make the checkout', () => {
        cy.dataTest('add-to-cart-sauce-labs-backpack').click()
        cy.get(itemName).then((text) => {
            let returnedItemName = text.first().text()
            cy.get('.shopping_cart_link').click()
            cy.get(itemName).should('have.text', returnedItemName)
            cy.dataTest('checkout').click()
            cy.fillYourInformation(faker.name.firstName(), faker.name.lastName(), faker.address.zipCode())
            cy.get(itemName).should('have.text', returnedItemName)
            cy.dataTest('finish').click()
            cy.get('span.title').should('have.text', 'Checkout: Complete!')
            cy.url().should('be.equal', Cypress.env('baseUrl') + '/checkout-complete.html')
        })
    })
})