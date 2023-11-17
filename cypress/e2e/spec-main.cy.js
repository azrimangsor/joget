import 'cypress-file-upload'

before(() => {
  // manage any unhandle error not due to functional issue
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  });
});

describe('Question 1', () => {
  it('Verify correct URL', () => {
    cy.visit('https://qainterview.on.joget.cloud/jw/web/userview/appcenter/v/_/home')
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

  before(()=> {
      // start fresh
      cy.clearAllCookies()
      cy.clearAllLocalStorage()

      cy.visit('https://www.joget.com/')

      // handle the privacy consent
      cy.get('div.cky-notice-group button.cky-btn.cky-btn-accept').should('be.visible').then(($element) => {
        if ($element.length > 0) {
            cy.get('div.cky-notice-group button.cky-btn.cky-btn-accept').click()
        } else {
          cy.log('Privacy element not exist');
        }
      }) 
  })

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

  it('Log in to Joget Website', () => {
  const username = Cypress.env('username')
  const password = Cypress.env('password')

  cy.visit('https://qainterview.cloud.joget.com/jw/web/userview/isr/isr/_/home')
  cy.get(':nth-child(1) > .btn > .fa').click()
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

  })

  it('Verify that this form cannot submit until all required fields are filled.', () => {
  cy.get('#assignmentComplete').click()

  cy.get('.form-message').should('contain.text', 'Validation Error')
  })

  it('Fill up the form and submit', () => {
    const nameSubject = 'Azri Mangsor'
    const description = 'This is a description to the request'
  
    cy.get('#subject').type(nameSubject)

    cy.get(':nth-child(4) > #description').click().type(description)

    // ** Start - Pick Calendar Date a Week Later

    // Get today's date
    var today = new Date()

    // Add 7 days to today's date
    var nextWeek = new Date(today)
    nextWeek.setDate(today.getDate() + 7)

    // Extract day, month, and year components
    var nextWeekDay = nextWeek.getDate()
    var nextWeekMonth = nextWeek.getMonth() + 1 // returns the month (0 to 11) of a date
    var nextWeekYear = nextWeek.getFullYear()

    var currMonth = today.getMonth() + 1

    cy.log("Today's date: ", today.toISOString().split('T')[0]);
    cy.log("Date one week from today: ", nextWeekDay + "-" + nextWeekMonth + "-" + nextWeekYear)

    var selectedDate = nextWeekYear + "-" + nextWeekMonth + "-" + nextWeekDay

    cy.get('.trigger').click()

    // Condition to select next calendar month
    if(nextWeekMonth !== currMonth)
    {
      cy.get('.ui-datepicker-next').click()
      cy.get('#ui-datepicker-div > table > tbody > tr > td > a[data-date='+ nextWeekDay +']').click()
    }else
    {
      cy.get('#ui-datepicker-div > table > tbody > tr > td > a[data-date='+ nextWeekDay +']').click()
    }

    // ** End - Pick Calendar Date a Week Later

    cy.get('#attachment1').attachFile('/upload_test_file.txt')

    cy.get('#assignmentComplete').click()

    cy.get('h2').should('contain.text', 'My Requests')

    cy.get('tbody > :nth-child(1) > .column_subject').should('contain.text', nameSubject)

    //submit form
    cy.get('#isr_personal_submitted > tbody > tr:nth-child(1) > td.row_action.rowaction_body.row_action_inner.body_').click()

    //verify submitted form
    cy.get('.field16 > .subform-cell-value').should('contain.text', nameSubject)
    cy.get(':nth-child(2) > :nth-child(4) > .subform-cell-value').should('contain.text', description)
    cy.get('.name').should('contain.text','upload_test_file.txt')
    cy.get(':nth-child(3) > .field16_2 > .subform-cell-value').should('contain', selectedDate)
  })

  it('Log out from Joget Website', () => {
    // log out
    cy.get('#sidebar-trigger').click()
    cy.get('.mm-profile > .dropdown').click()
    cy.get('.mm-profile > ul > :nth-child(2) > a > span').click()

    // verify in return to main page
    cy.get('strong > span').should('contain.text', 'Welcome to Your Service Request Center')
  })
})