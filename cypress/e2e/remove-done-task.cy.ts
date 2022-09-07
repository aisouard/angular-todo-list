describe('Remove done task', () => {
  it('removes a done task', () => {
    cy.visit('/');

    cy.get('[data-qa="done-tasks"]')
      .contains('Remove me');

    cy.get('[data-qa="done-tasks-0-remove"]')
      .click();

    cy.get('[data-qa="done-tasks"]')
      .contains('');
  });
});
