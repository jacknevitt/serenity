describe('My first test', () => {
  it("doesn't do much", () => {
    cy.visit('http://localhost:3000');
    // Chai and Mocha sytax in Cypress 🙃
    // TODO: stop vscode from autocompleting with jest
    expect(true).to.equal(true);
  });
});
