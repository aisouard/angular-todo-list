describe('Mark task as Done', () => {
  it('marks an incomplete task as done', () => {
    cy.visit('/');

    cy.get('[data-qa="incomplete-tasks"]')
      .contains('Nearly done');

    cy.get('[data-qa="incomplete-tasks-0-done"]')
      .click();

    cy.get('[data-qa="incomplete-tasks"]')
      .contains('');

    cy.get('[data-qa="done-tasks"]')
      .contains('Nearly done');
  });
});
