describe('jagoan hosting test teknis', () => {
    it('it visit facebook', () => {
      cy.visit('https://facebook.com')
    })

    it('it should login', () => {

        cy.visit('https://facebook.com')

        cy.get('input[name = email]')
        .type('081915643002').should('have.value', '081915643002')

        cy.get('input[name = pass')
        .type('wahonomagang2020').should('have.value', 'wahonomagang2020')

        cy.get('input[id = u_0_b]')
        .click()
    })

    it('it should login failed', () => {
        cy.visit('https://facebook.com')

        cy.get('input[name = email]')
        .type('fake@gmail.com').should('have.value', 'fake@gmail.com')

        cy.get('input[name = pass')
        .type('fakePassword').should('have.value', 'fakePassword')

        cy.get('input[id = u_0_b]')
        .click()
    })
  })
