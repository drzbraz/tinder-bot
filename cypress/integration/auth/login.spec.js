/// <reference types="cypress" />
describe('example to-do app', () => {
  beforeEach(() => {
    // visit web www.tinder.com
    cy.visit('https://tinder.com/')
  })
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
  })

  it('should authenticate on tinder', () => {
    // cy.get('span').contains('I Accept').click()
    // cy.get('a[href="https://tinder.onelink.me/9K8a/3d4abb81"]').click()
    // cy.get('button').contains('Log in with Facebook').click()
    // cy.wait(2000)
    // cy.window().then((win) => {
    //   cy.stub(win, 'open', (url) => {
    //     // change window location to be same as the popup url
    //     console.log(url)
    //     win.location.href = url
    //     console.log(win.location.href)
    //   }).as('Open') // alias it with popup, so we can wait refer it with @popup
    // })
    // cy.wait(2000)
    // cy.get('@Open')
    // cy.get('@Open').get('[type="text"]').type('drz.braz@gmail.com')
    // cy.get('@Open').get('[type="password"]').type('Fsolqvpmvcq403118')
    // cy.get('#loginbutton').click()

    // cy.window().then((win) => {
    //   cy.stub(win, 'open', (url) => {
    //     // change window location to be same as the popup url
    //     console.log(url)
    //     win.location.href = url
    //     console.log(win.location.href)
    //   }).as('Logged') // alias it with popup, so we can wait refer it with @popup
    // })
    // cy.get('[data-testid="allow"]').contains('Allow').click()
    // cy.get('[data-testid="allow"]').contains('Enable').click()
    cy.wait(900)
    let qnt = 900
    while (qnt > 0) {
      cy.get('[fill="url(#svg-fill-linear__like)"]').click()
      cy.wait(1200)

      qnt--
    }

    // cy.get('[fill="url(#svg-fill-linear__like)"]').click()
    // cy.get('[fill="url(#svg-fill-linear__like)"]').click()
    // cy.get('[fill="url(#svg-fill-linear__like)"]').click()
  })
})
