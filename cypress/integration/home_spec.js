describe('Test Homepage', () => {
  it('visits home page', () => {
    cy.visit('/home');

    cy.get('#root').contains('Home');
  });
});
