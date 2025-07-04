@regression @contact
Feature: https://webdriveruniversity.com - contact us page

    Background: Pre conditions
        Given I navigate to webdriveruniversity homepge
        When i click on the contact us button
        And I switch to the new browser tab

    Scenario: Valid contact us form submission
        And i type a first name
        And i type a last name
        And i type email address
        And i type comment
        And i click on submit button
        Then I should see a success message


    Scenario: InValid contact us form submission
        And i type a first name
        And i type a last name
        # And i type email address
        And i type comment
        And I wait for 3 seconds
        And i click on submit button
        Then I should see a unsuccessfull message


    Scenario: Valid contact us form submission - using specific data
        And i type a spedific first name "Sarah"
        And i type a specific last name "Robinson"
        And i type specific email address "sarah.robinson@robinson.com"
        And i type specific comment "Hello World" and a number 2 within teh comment inpurt field
        And i click on submit button
        Then I should see a success message

    Scenario: Valid contact us form submission - using Random data
        And i type a random first name
        And i type a random last name
        And i type random email address
        And i type specific comment "Hello World" and a number 2 within teh comment inpurt field
        And i click on submit button
        Then I should see a success message

    @smoke
    Scenario Outline: Validate Contact Us page
        And i type a firstname <firstName> and lastName <lastName>
        And i type a emailAddress '<emailAddress>' and a comment '<comment>'
        And i click on submit button
        Then i should be presented with header text '<message>'

        Examples:
            | firstName | lastName | emailAddress    | comment                | message                      |
            | John      | Jones    | jones@email.com | Hello how are you?     | Thank You for your Message!  |
            | Mia       | Carter   | mia@gmail.com   | Test 123               | Thank You for your Message!  |
            | Grace     | Hudson   | gracemail.com   | Do you create websites | Error: Invalid email address |


    Scenario: Testing data table

        Given the user fills contact form with:
            | firstName | lastName | emailAddress    | comment            | message                     |
            | John      | Jones    | jones@email.com | Hello how are you? | Thank You for your Message! |
        Then I should see a success message

    Scenario: Testing data table with datarows.Hash

        Given I fill the contact form with:
            | field        | value            |
            | firstName    | Sree             |
            | lastName     | Devi             |
            | emailAddress | sree@hotmail.com |
            | comment      | jimmu            |
        Then I should see a success message
