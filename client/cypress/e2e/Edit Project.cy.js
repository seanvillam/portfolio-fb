describe("Edit Project", () => {
  it("tests Edit Project", () => {
    cy.viewport(1365, 945);
    cy.visit("http://localhost:5173/admin/projects");
    cy.get("table a").click();
    cy.get("div:nth-of-type(1) > input").click();
    cy.get("div:nth-of-type(1) > input").type("Test - Edited");
    cy.get("textarea").click();
    cy.get("textarea").type("Test edit");
    cy.get("#root > div > div button").click();
  });
});
