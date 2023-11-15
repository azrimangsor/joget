
before(() => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  });
});

describe.skip('Question 1', () => {
  beforeEach(() => {
    cy.visit('https://qainterview.on.joget.cloud/jw/web/userview/appcenter/v/_/home')
  });

  it('Verify correct URL', () => {
    cy.url().should('match', /https:\/\/(?=qainterview.on.joget.cloud)/);
  })

  it('Verify page logo exist', () => {
    cy.get('.logo')
      .should('exist')
      .should('be.visible')
  })

  it('Verify page title', () => {
    cy.get('#header-link > span').should('contain.text', 'Joget DX')
  })
})

describe('Question 2', () => {
  beforeEach(() => {
    cy.visit('https://www.joget.com/')
    cy.get('.cky-notice-btn-wrapper > .cky-btn-accept')
      .should('exist')
      .should('be.visible')
      .click()
  });

  it('Visit Platform page', () => {
      cy.get('#menu-item-dropdown-420').scrollIntoView().should('be.visible').invoke('show').click({ force: true })
    
      cy.get('#menu-item-1359 > .dropdown-item').then(($element) => {
        try {
          cy.get('#menu-item-1359 > .dropdown-item').click()
        } catch (error) {
          cy.log(`Error caught: ${error.message}`);
        }
      })

      cy.url().should('include', 'platform')
      cy.get('.banner--title-large').should('have.text', 'Platform Overview')
  })

  it('Visit Solutions page', () => {
    cy.get('#menu-item-dropdown-419').scrollIntoView().should('be.visible').invoke('show').click({ force: true })
  
    cy.get('#menu-item-1699 > .dropdown-item').then(($element) => {
      try {
        cy.get('#menu-item-1699 > .dropdown-item').click()
      } catch (error) {
        cy.log(`Error caught: ${error.message}`);
      }
    })

    cy.url().should('include', 'solutions')
    cy.get('.banner--title-large').should('have.text', 'Solutions')
})

it('Visit Partner Network page', () => {
  cy.get('#menu-item-dropdown-418').scrollIntoView().should('be.visible').invoke('show').click({ force: true })

  cy.get('#menu-item-1850 > .dropdown-item').then(($element) => {
    try {
      cy.get('#menu-item-1850 > .dropdown-item').click()
    } catch (error) {
      cy.log(`Error caught: ${error.message}`);
    }
  })

  cy.url().should('include', 'partner-network')
  cy.get('.banner--title-large').should('have.text', 'Partner Network')
})
  
it('Visit About page', () => {
  cy.get('#menu-item-dropdown-417').scrollIntoView().should('be.visible').invoke('show').click({ force: true })

  cy.get('#menu-item-565 > .dropdown-item').then(($element) => {
    try {
      cy.get('#menu-item-565 > .dropdown-item').click()
    } catch (error) {
      cy.log(`Error caught: ${error.message}`);
    }
  })

  cy.url().should('include', 'about/overview')
  cy.get('.banner--title-large').should('have.text', 'About')
})

it('Visit Blog page', () => {
  cy.get('#menu-item-dropdown-207').scrollIntoView().should('be.visible').invoke('show').click({ force: true })

  cy.get('#menu-item-1851 > .dropdown-item').then(($element) => {
    try {
      cy.get('#menu-item-1851 > .dropdown-item').click()
    } catch (error) {
      cy.log(`Error caught: ${error.message}`);
    }
  })

  cy.url().should('include', 'blog')
  cy.get('.banner--title-large').should('have.text', 'Blog')
})

})