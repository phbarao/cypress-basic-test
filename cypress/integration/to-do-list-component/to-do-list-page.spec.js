describe("To Do List UI", () => {
  // Check if title is correct
  it("Should return true when title component is correct", () => {
    cy.visit("/");

    cy.contains("To-Do List Component").should("to.have.length", 1);
  });

  it("Should add a new task", () => {
    cy.visit("/");

    cy.get("[data-cy=input-to-do]").type("Nova tarefa");
    cy.get("[data-cy=btn-add]").click();

    cy.get("[data-cy=to-do-row]").should("to.have.length", 1);
    cy.contains("Nova tarefa").should("to.have.length", 1);
  });

  it("Should add two tasks", () => {
    cy.visit("/");

    cy.get("[data-cy=input-to-do]").type("Nova tarefa");
    cy.get("[data-cy=btn-add]").click();

    cy.get("[data-cy=input-to-do]").type("Outra tarefa");
    cy.get("[data-cy=btn-add]").click();

    cy.get("[data-cy=to-do-row]").should("to.have.length", 2);
    cy.contains("Nova tarefa").should("to.have.length", 1);
    cy.contains("Outra tarefa").should("to.have.length", 1);
  });
});
