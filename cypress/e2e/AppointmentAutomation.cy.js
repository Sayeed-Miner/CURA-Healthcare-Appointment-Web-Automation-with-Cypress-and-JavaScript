describe('CURA Healthcare Appointment Web Automation with Cypress and JavaScript', () => {
  it('Should login and book an appointment successfully', () => {
    // Visit the website
    cy.visit('https://katalon-demo-cura.herokuapp.com/');

    // Login
    cy.get('#btn-make-appointment').click();
    cy.get('#txt-username').type('John Doe');
    cy.get('#txt-password').type('ThisIsNotAPassword');
    cy.get('#btn-login').click();
    
    // Make an appointment
    
    // Facility - Seoul CURA Healthcare Center
    cy.get('#combo_facility').select('Seoul CURA Healthcare Center');
    
    // Check on "Apply for hospital readmission"
    cy.get('#chk_hospotal_readmission').check();
    
    // Healthcare Program - Medicaid
    cy.get('#radio_program_medicaid').check();
    
    // Select a visiting date
    cy.get('#txt_visit_date').click();
    cy.get(':nth-child(6) > :nth-child(6)').click();
    
    // Add a comment
    cy.get('#txt_comment').type('This is an automated appointment');
    
    // Book an Appointment
    cy.get('#btn-book-appointment').click();
    
    // Verify the appointment
    cy.contains('Appointment Confirmation').should('be.visible');
    cy.contains('Seoul CURA Healthcare Center').should('be.visible');
    cy.contains('Yes').should('be.visible');
    cy.contains('Medicaid').should('be.visible');
    });
});