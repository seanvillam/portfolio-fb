describe("Sign out", () => {
  it("tests Sign out", () => {
    cy.viewport(1365, 945);
    cy.visit("http://localhost:5173/admin/projects");
    cy.get("nav > button").click();
    cy.location("href").should("eq", "http://localhost:5173/signin");
  });
});
