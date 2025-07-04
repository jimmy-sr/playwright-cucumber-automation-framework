Feature: Login validation for webdriver page


    Scenario Outline: Validate valid & invalid login
        Given I navigate to webdriveruniversity homepge
        When I click on login portal button
        And i switch to the new browser tab
        And i type a username <username>
        And I type a password <passwod>
        And I wait for 2 seconds
        And I click on Login button
        Then I should be presented with an alert box which contains text '<expectedAlertText>'

        Examples:
            | username  | passwod      | expectedAlertText    |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | webdriver    | validation failed    |