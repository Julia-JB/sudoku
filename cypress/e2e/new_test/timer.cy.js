/// <reference types="cypress" />

describe("Timer", () => {
    it("shows 00:10", () => {

    cy.visit('/');

    for (let k = 0; k < 10; k++) {
    cy.contains('.status__time', `00:0${k}`);
    }
   
   })
  });