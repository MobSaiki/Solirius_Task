import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import { MvBookmarkPage } from "@pages/MvBookmarkPage";
  const mvBookmarkPage = new MvBookmarkPage
    
  
  Given("User is on Media Viewer page", () => {
    cy.visit("/");
  });
  
  When("User clears existing bookmarks", () => {
    mvBookmarkPage.clearBookmarks();
  });
  
  When("User adds a bookmark", () => {
    mvBookmarkPage.addBookmark();
  });

  Then("User should not see anymore bookmarks", () => {
    mvBookmarkPage.noBookmarksAssert();
  });