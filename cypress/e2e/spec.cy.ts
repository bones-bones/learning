// https://the-internet.herokuapp.com/

describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://the-internet.herokuapp.com/");
    expect(cy.findByText("Forgot Password")).to.have.text("Forgot Password");
    cy.findByText("Forgot Password").click();
  });
});

// cy.type('hello')
