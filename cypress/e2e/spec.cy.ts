// https://the-internet.herokuapp.com/

describe("template spec", () => {
  it("passes", () => {
    cy.visit(
      "https://wwecorp.wd5.myworkdayjobs.com/en-US/wwecorp/job/Remote---Tennessee/Music-Coordinator_R0005778/apply/applyManually",
    );

    cy.get('[data-automation-id="legalNameSection_firstName"');
  });
});

// cy.type('hello')
