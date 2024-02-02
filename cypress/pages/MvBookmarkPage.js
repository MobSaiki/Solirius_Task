// import { MvModel } from "cypress/e2e/models/mvModel";
import { slowCypressDown } from 'cypress-slow-down'

// const mvModel = new MvModel

slowCypressDown()

export class MvBookmarkPage {
    clearBookmarks() {
        cy.reload();
        cy.get('#mvBookmarksBtn')
            .click();
        cy.get('.bookmark__delete', { timeout: 10000 }).should('exist');
        cy.get('.bookmark__delete')
            .click({ multiple: true, timeout: 7000 });
    };
    addBookmark() {
        cy.reload();
        cy.get('#mvBookmarksBtn')
            .click();
        cy.get('button#addBookmark')
            .click();
        cy.get('.bookmark__input')
            .type('bookmark1');
        cy.get('button.bookmark__save')
            .click();
    };
    noBookmarksAssert() {
        cy.reload();
        cy.get('#mvBookmarksBtn')
            .click();
        cy.get('.bookmark__delete', { timeout: 10000 }).should('not.exist');
    }
}
  