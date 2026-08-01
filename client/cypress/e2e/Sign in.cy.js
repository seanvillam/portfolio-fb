describe("Sign In", () => {
  it("tests Sign In", () => {
    cy.viewport(1365, 945);
    cy.visit("http://localhost:5173/signin");
    cy.visit("http://localhost:5173/signin");
    cy.get("div:nth-of-type(1) > input").click();
    cy.get("div:nth-of-type(1) > input").type("testname@mail.com");
    cy.get("div:nth-of-type(2) > input").type("test123");
    cy.get("button").click();
    cy.location("href").should("eq", "http://localhost:5173/admin");
  });
});
