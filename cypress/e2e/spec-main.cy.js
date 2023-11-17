const { cyanBright } = require("ansi-colors");

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

describe.skip('Question 2', () => {
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

describe('Question 3', () => {

  //a) Login to https://qainterview.cloud.joget.com/jw/web/userview/isr/isr/_/home with username/password is cat/password.

  it('Log in to Joget Website', () => {
    const username = Cypress.env('username')
    const password = Cypress.env('password')

    const nameSubject = 'Azri Mangsor'
    const description = 'This is a description to the request'

    cy.visit('https://qainterview.cloud.joget.com/jw/web/userview/isr/isr/_/home')
    cy.get('.btn > .fa').click()
    cy.get('.user-link > .btn').click()

    cy.log(username)
    cy.log(password)

    cy.get('#j_username').type(username)
    cy.get('#j_password').type(password)

    cy.get('.waves-button-input').click()

    cy.get(':nth-child(6) > .app-link').invoke('removeAttr', 'target').click()

    cy.url().should('include', 'isr')

    cy.get('#sidebar-trigger').click()

    cy.get('#category-4E37D35FDDE84BC1A395BD48D9778BF9 > .dropdown').click()

    cy.get('#5F799C6D16334195A3AC214EDACF62E0 > .menu-link > span').click()

    cy.get('#assignmentComplete').click()

    cy.get('.form-message').should('contain.text', 'Validation Error')

    cy.get('#subject').click().type(nameSubject)

    cy.get(':nth-child(4) > #description').click().type(description)

    // Get today's date
    var today = new Date()

    // Add 7 days to today's date
    var nextWeek = new Date(today)
    nextWeek.setDate(today.getDate() + 7)

    // Extract day, month, and year components
    var nextWeekDay = nextWeek.getDate()
    var nextWeekMonth = nextWeek.getMonth() + 1 // Months are zero-based
    var nextWeekYear = nextWeek.getFullYear()

    var currMonth = today.getMonth()

    cy.log("Today's date: ", today.toISOString().split('T')[0]);
    cy.log("Date one week from today: ", nextWeekDay + "/" + nextWeekMonth + "/" + nextWeekYear)

    cy.get('.trigger').click()

    // Condition to select next calendar month
    if(nextWeekMonth != currMonth)
    {
      cy.get('.ui-datepicker-next').click()
      cy.get('#ui-datepicker-div > table > tbody > tr > td > a[data-date='+ nextWeekDay +']').click()
    }else
    {
      cy.get('#ui-datepicker-div > table > tbody > tr > td > a[data-date='+ nextWeekDay +']').click()
    }

    cy.get('#assignmentComplete').click()

    cy.get('h2').should('contain.text', 'My Requests')

    cy.get('tbody > :nth-child(1) > .column_subject').should('contain.text', nameSubject)
  })

  
  

})