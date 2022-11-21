Feature: To test the feature of the calculator app

@Scenarios
Scenario: Add two numbers
    Given the user on calculator app
    When the user adds "4" and "7"
    Then the result "11" should be displayed

Scenario: Multiply two numbers
    When the user multiplies "5" with "6"
    Then the result "30" should be displayed

Scenario: Clear the text
    When the user adds "22" and "11"
    When the user click on AC button
    Then the result should be cleared
