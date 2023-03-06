Feature: Calculate holiday entitlement
    
    Scenarios that test the functionality of calulating a user's holiday entitlement via the www.gov.uk website

    Background:
            Given User is on Calculate Holiday Entitlement page
            When User clicks Start Now button

    Rule: User first selects days worked per week followed by for a full leave year

        Background:
            When User selects "days worked per week"
            And User selects for "a full leave year"

        @daysWorkedPerWeek
        Scenario Outline: User calculates holiday entitlement based on days worked per week and for a full leave year
            When User inputs <dayNum> days worked per week
            Then User should have <holidayNum> "days" holiday

            Examples:
                |   dayNum |    holidayNum  |show
                |   1      |    5.6         |
                |   3      |    16.8        |
                |   5      |    28          |
                |   7      |    28          |

        @daysWorkedPerWeek @errorTest
        Scenario Outline: User inputs invalid number of worked days
            When User inputs <dayNum> days worked per week
            Then Error Message should show

            Examples:
                |   dayNum |
                |   8      |
                |   -1     |

        @daysWorkedPerWeek @errorTest
        Scenario: User inputs a space for number of worked days
            And User inputs ' ' days worked per week
            Then Error Message should show
            
    Rule: User first selects hours worked per week followed by for someone starting part way through a leave year

        Background: 
            When User selects "hours worked per week"
            And User selects for "someone starting part way through a leave year"

        @hoursWorkedPerWeek
        Scenario Outline: User calclates holiday entitlement based on hours worked per week and for someone starting part way through a leave year
            When User inputs employment start date
            And User inputs leave year start date
            And User inputs <hoursNum> hours worked
            And User inputs <dayNum> days worked per week
            Then User should have <holidayNum> "hours" holiday

            Examples:
                |   hoursNum   |    dayNum       | holidayNum  |
                |   25         |    7            |  42.9        |
                |   30.7       |    5            |  73.7        |
                |   40         |    5            |  96        |
        
        @hoursWorkedPerWeek @errorTest
        Scenario Outline: User enters invalid hours worked per week
            When User inputs employment start date
            And User inputs leave year start date
            And User inputs <hoursNum> hours worked
            Then Error Message should show

            Examples:
                |   hoursNum |
                |   169      |
                |   -1       |
        
        @hoursWorkedPerWeek @errorTest
        Scenario: User enters invalid leave year start date
            When User inputs employment start date
            And User inputs invalid leave year start date
            Then Error Message should show

    Rule: User first selects casual or irregular hours followed by for a full leave year

        @casualOrIrregularHours
        Scenario: User calculates holiday entitlement based on casual or irregular hours and for a full leave year
            When User selects "casual or irregular hours, including zero hours contracts"
            And User selects for "a full leave year"
            Then User should have "5.6" "weeks" holiday

    Rule: User first selects annualised hours followed by for someone leaving part way through a leave year 

        Background: 
            When User selects "annualised hours"
            And User selects for "someone leaving part way through a leave year"

        @annualisedHours
        Scenario: User calculates holiday entitlement based on annualised hours and for someone leaving part way through a leave year 
            And User inputs employment end date
            And User inputs leave year start date
            Then User should have "3.30" "weeks" holiday

        @annualisedHours @errorTest
        Scenario: User inputs invalid employment end date
            And User inputs invalid employment end date
            Then Error Message should show