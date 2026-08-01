describe("Add project", () => {
  it("tests Add project", () => {
    cy.viewport(1365, 945);
    cy.visit("http://localhost:5173/admin/projects");
    cy.visit("http://localhost:5173/admin/projects");
    cy.get("#root > div > div a").click();
    cy.get("div:nth-of-type(1) > input").click();
    cy.get("div:nth-of-type(1) > input").type("Test");
    cy.get("div:nth-of-type(2) > input").click();
    cy.get("div:nth-of-type(2) > input").type("2026-08-01");
    cy.get("textarea").click();
    cy.get("textarea").type("Test");
    cy.get("#root > div > div button").click();
  });
});
