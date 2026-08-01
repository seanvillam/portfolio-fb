describe("Sign Up", () => {
  it("tests Sign Up", () => {
    cy.viewport(1350, 945);
    cy.visit("http://localhost:5173/signup");
    cy.visit("http://localhost:5173/signup");
    cy.get("div:nth-of-type(1) > input").click();
    cy.get("div:nth-of-type(1) > input").type("Test");
    cy.get("div:nth-of-type(2) > input").click();
    cy.get("div:nth-of-type(2) > input").type("Name");
    cy.get("div:nth-of-type(3) > input").click();
    cy.get("div:nth-of-type(3) > input").type("testname@mail.com");
    cy.get("div:nth-of-type(4) > input").click();
    cy.get("div:nth-of-type(4) > input").type("test123");
    cy.get("button").click();
  });
});
