describe('Edit incomplete task', () => {
  it('edits an incomplete task', () => {
    cy.visit('/');

    cy.get('[data-qa="new-task-name"]')
      .type('It will never be done');

    cy.get('[data-qa="create-task-button"]')
      .click();

    cy.get('[data-qa="incomplete-tasks"]')
      .contains('It will never be done');

    cy.get('[data-qa="incomplete-tasks-0-label"]')
      .click();

    cy.get('[data-qa="incomplete-tasks-0-input"]')
      .clear().type('Maybe one day');

    cy.get('[data-qa="incomplete-tasks-0-apply"]')
      .click();

    cy.get('[data-qa="incomplete-tasks"]')
      .contains('Maybe one day');
  });
});
