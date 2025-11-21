Feature: Healthcare page Navigation

Scenario: 017 - "Talk to an expert" buttons redirect to the Contact Us page
  Given I open the Healthcare Solutions page
  When I scroll to the 1 Talk to an expert button
  When I click the 1 Talk to an expert button
  Then I should be redirected to the Contact Us page
  When I return to the Healthcare Solutions page

  When I scroll to the 2 Talk to an expert button
  When I click the 2 Talk to an expert button
  Then I should be redirected to the Contact Us page
  When I return to the Healthcare Solutions page

  When I scroll to the 3 Talk to an expert button
  When I click the 3 Talk to an expert button
  Then I should be redirected to the Contact Us page

  Scenario: 018 - “Schedule a demo” and “Sign up” buttons in the first block redirect to correct pages
    Given I open the Healthcare Solutions page

    When I scroll to the first block buttons
    When I click the Schedule a demo button
    Then I should be redirected to the Contact Us page
    When I return to the Healthcare Solutions page

    When I scroll to the first block buttons
    When I click the Sign up button
    Then I should be redirected to the Sign Up page

  Scenario: 019 - Each “USE CASES” tab correctly reveals its hidden text
    Given I open the Healthcare Solutions page
    When I scroll to the USE CASES section

    When I click the 1 Use Case tab
    Then the 1 Use Case panel should display the correct text

    When I click the 2 Use Case tab
    Then the 2 Use Case panel should display the correct text

    When I click the 3 Use Case tab
    Then the 3 Use Case panel should display the correct text

    When I click the 4 Use Case tab
    Then the 4 Use Case panel should display the correct text

    When I click the 5 Use Case tab
    Then the 5 Use Case panel should display the correct text

  Scenario: 020 - Each revealed “USE CASES” tab contains a working YouTube video link
    Given I open the Healthcare Solutions page
    When I scroll to the USE CASES section

    When I click the 1 Use Case tab
    Then I click the YouTube link in the tab
    Then I should be on a YouTube page
    Then I close the current tab and return

    When I click the 2 Use Case tab
    Then I click the YouTube link in the tab
    Then I should be on a YouTube page
    Then I close the current tab and return

    When I click the 3 Use Case tab
    Then I click the YouTube link in the tab
    Then I should be on a YouTube page
    Then I close the current tab and return

    When I click the 4 Use Case tab
    Then I click the YouTube link in the tab
    Then I should be on a YouTube page
    Then I close the current tab and return

    When I click the 5 Use Case tab
    Then I click the YouTube link in the tab
    Then I should be on a YouTube page
    Then I close the current tab and return
