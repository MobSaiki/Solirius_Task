import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
import { CalculateHolidayPage } from "@pages/CalculateHolidayPage";
const calculateHolidayPage = new CalculateHolidayPage
  
  Given("User is on Calculate Holiday Entitlement page", () => {
    cy.visit("/");
  });
  
  When("User clicks Start Now button", () => {
    calculateHolidayPage.clickStart();
  });
  
  When("User selects {string}", (userChoice) => {
    calculateHolidayPage.userSelection1(userChoice);
  });

  When("User selects for {string}", (userChoice) => {
    calculateHolidayPage.userSelection2(userChoice);
  });

  When("User inputs {string} days worked per week", (timeWorked) => {
    calculateHolidayPage.inputWork(timeWorked);
  });

  When("User inputs {int} days worked per week", (timeWorked) => {
    calculateHolidayPage.inputWork(timeWorked);
  });

  When("User inputs {float} hours worked", (timeWorked) => {
    calculateHolidayPage.inputWork(timeWorked);
  });

  When("User inputs employment start date", () => {
    calculateHolidayPage.employmentStartDate();
  });

  When("User inputs employment end date", () => {
    calculateHolidayPage.employmentEndDate();
  });

  When("User inputs leave year start date", () => {
    calculateHolidayPage.leaveYearStartDate();
  });

  When("User inputs invalid leave year start date", () => {
    calculateHolidayPage.invalidLeaveYearStartDate();
  });

  When("User inputs invalid employment end date", () => {
    calculateHolidayPage.invalidEmploymentEndDate();
  });

  Then("User should have {float} {string} holiday", (holidays, time) => {
    calculateHolidayPage.assertHolidays(holidays, time);
  });

  Then("User should have {string} {string} holiday", (holidays, time) => {
    calculateHolidayPage.assertHolidays(holidays, time);
  });

  Then("Error Message should show", () => {
    calculateHolidayPage.errorMsg();
  });
  