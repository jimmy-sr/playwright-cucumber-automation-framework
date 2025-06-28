Feature: https://webdriveruniversity.com - contact us page

    Scenario: Valid contact us form submission
        Given I navigate to webdriveruniversity homepge
        When i click on the contact us button
        And i type a first name
        And i type a last name
        And i type email address
        And i type comment
        And i click on submit button
        Then I should see a success message