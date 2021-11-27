describe("Navigation", () => {
  it("should navigate to main page and find text", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h1").contains("Welcome to Github");
  });
});

describe("Search", () => {
  it("should search nextjs with typescript, sorted by stars and find text", () => {
    cy.visit("http://localhost:3000/");
    cy.get("input").type("nextjs").type("{enter}");
    cy.get('[name="language"]').select("typescript");
    cy.get('[name="sort"]').select("stars");
    cy.get("div").contains("React Hooks for data fetching");
  });
});

describe("Router", () => {
  it("should test router url", () => {
    cy.visit("http://localhost:3000/");
    cy.get("input").type("nextjs").type("{enter}");
    cy.get('[name="language"]').select("typescript");
    cy.get('[name="sort"]').select("stars");
    cy.url().should(
      "eq",
      "http://localhost:3000/?q=nextjs&language=typescript&sort=stars&order=&page=1"
    );
  });
});
