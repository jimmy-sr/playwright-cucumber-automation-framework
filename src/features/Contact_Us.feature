Feature: https://webdriveruniversity.com - contact us page

    # Scenario: Valid contact us form submission
    #     Given I navigate to webdriveruniversity homepge
    #     When i click on the contact us button
    #     And i switch to the new browser tab
    #     And i type a first name
    #     And i type a last name
    #     And i type email address
    #     And i type comment
    #     And i click on submit button
    #     Then I should see a success message

    # Scenario: InValid contact us form submission
    #     Given I navigate to webdriveruniversity homepge
    #     When i click on the contact us button
    #     And i switch to the new browser tab
    #     And i type a first name
    #     And i type a last name
    #     # And i type email address
    #     And i type comment
    #     And i click on submit button
    #     Then I should see a unsuccessfull message


    Scenario: Valid contact us form submission - using specific data
        Given I navigate to webdriveruniversity homepge
        When i click on the contact us button
        And i switch to the new browser tab
        And i type a spedific first name "Sarah"
        And i type a specific last name "Robinson"
        And i type specific email address "sarah.robinson@robinson.com"
        And i type specific comment "Hello World" and a number 2 within teh comment inpurt field
        And i click on submit button
        Then I should see a success message