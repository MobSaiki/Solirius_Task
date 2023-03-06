import { CalculateHolidayModel } from "cypress/e2e/models/calculateHolidayModel";
const calculateHolidayModel = new CalculateHolidayModel

export class CalculateHolidayPage {
    clickStart() {
        cy.get(calculateHolidayModel.startBtn)
            .click();
    }
    userSelection1(userChoice) {
        cy.fixture('holidayEntitlementData').then(data => { 
            this.Q1Data = data[0];
            if (userChoice == this.Q1Data.choice0) {
                cy.get(calculateHolidayModel.userOption0)
                    .click();
                cy.get(calculateHolidayModel.continueBtn)
                    .click();
            }
            else if (userChoice == this.Q1Data.choice1) {
                cy.get(calculateHolidayModel.userOption1)
                    .click();
                cy.get(calculateHolidayModel.continueBtn)
                    .click();
            }
            else if (userChoice == this.Q1Data.choice2) {
                cy.get(calculateHolidayModel.userOption2)
                    .click();
                cy.get(calculateHolidayModel.continueBtn)
                    .click();
            }
            else if (userChoice == this.Q1Data.choice3) {
                cy.get(calculateHolidayModel.userOption3)
                    .click();
                cy.get(calculateHolidayModel.continueBtn)
                    .click();
            }
        })
    }
    userSelection2(userChoice) {
        cy.fixture('holidayEntitlementData').then(data => { 
            this.Q2Data = data[1];
            if (userChoice == this.Q2Data.choice0) {
                cy.get(calculateHolidayModel.userOption0)
                    .click();
                cy.get(calculateHolidayModel.continueBtn)
                    .click();
            }
            else if (userChoice == this.Q2Data.choice1) {
                cy.get(calculateHolidayModel.userOption1)
                    .click();
                cy.get(calculateHolidayModel.continueBtn)
                    .click();
            }
            else if (userChoice == this.Q2Data.choice2) {
                cy.get(calculateHolidayModel.userOption2)
                    .click();
                cy.get(calculateHolidayModel.continueBtn)
                    .click();
            }
        })
    }
    inputWork(timeWorked) {
        cy.get(calculateHolidayModel.inputField)
            .type(timeWorked);
        cy.get(calculateHolidayModel.continueBtn)
            .click();
    }
    assertHolidays(holidays, time) {
        cy.get(calculateHolidayModel.numOfHolidays)
            .should('contain', `${holidays} ${time} holiday`); 
    }
    errorMsg() {
        cy.get(calculateHolidayModel.errorMsg)
            .should('contain', 'problem');
    }
    employmentStartDate() {
        cy.fixture('holidayEntitlementData').then(data => { 
            this.DateData = data[2];
            cy.get(calculateHolidayModel.employmentStartDay)
                .type(this.DateData.employmentStartDay);
            cy.get(calculateHolidayModel.employmentStartMonth)
                .type(this.DateData.employmentStartMonth);
            cy.get(calculateHolidayModel.employmentStartYear)
                .type(this.DateData.employmentStartYear);
            cy.get(calculateHolidayModel.continueBtn)
                .click();
       })
    }
    employmentEndDate() {
        cy.fixture('holidayEntitlementData').then(data => { 
            this.DateData = data[2];
            cy.get(calculateHolidayModel.employmentStartDay)
                .type(this.DateData.employmentStartDay);
            cy.get(calculateHolidayModel.employmentStartMonth)
                .type(this.DateData.employmentStartMonth);
            cy.get(calculateHolidayModel.employmentStartYear)
                .type(this.DateData.employmentStartYear);
            cy.get(calculateHolidayModel.continueBtn)
                .click();
       })
    }
    leaveYearStartDate() {
        cy.fixture('holidayEntitlementData').then(data => { 
            this.DateData = data[2];
            cy.get(calculateHolidayModel.leaveYearStartDay)
                .type(this.DateData.leaveYearStartDay);
            cy.get(calculateHolidayModel.leaveYearStartMonth)
                .type(this.DateData.leaveYearStartMonth);
            cy.get(calculateHolidayModel.leaveYearStartYear)
                .type(this.DateData.leaveYearStartYear);
            cy.get(calculateHolidayModel.continueBtn)
                .click();
       })
    }
    invalidLeaveYearStartDate() {
        cy.fixture('holidayEntitlementData').then(data => { 
            this.DateData = data[2];
            cy.get(calculateHolidayModel.leaveYearStartDay)
                .type(this.DateData.invalidLeaveYearStartDay);
            cy.get(calculateHolidayModel.leaveYearStartMonth)
                .type(this.DateData.invalidLeaveYearStartMonth);
            cy.get(calculateHolidayModel.leaveYearStartYear)
                .type(this.DateData.invalidLeaveYearStartYear);
            cy.get(calculateHolidayModel.continueBtn)
                .click();
       })
    }
    invalidEmploymentEndDate() {
        cy.fixture('holidayEntitlementData').then(data => { 
            this.DateData = data[2];
            cy.get(calculateHolidayModel.leaveYearStartDay)
                .type(this.DateData.invalidEmploymentEndDay);
            cy.get(calculateHolidayModel.leaveYearStartMonth)
                .type(this.DateData.invalidEmploymentEndMonth);
            cy.get(calculateHolidayModel.leaveYearStartYear)
                .type(this.DateData.invalidEmploymentEndYear);
            cy.get(calculateHolidayModel.continueBtn)
                .click();
       })
    }
}
  