describe('Create new task', () => {
  it('Displays the new task in the incomplete list', () => {
    cy.visit('/');

    cy.get('[data-qa="new-task-name"]')
      .type('A very simple task');

    cy.get('[data-qa="create-task-button"]')
      .click();

    cy.get('[data-qa="new-task-name"]')
      .should('have.value', '');

    cy.get('[data-qa="incomplete-tasks"]')
      .contains('A very simple task');
  });
});
