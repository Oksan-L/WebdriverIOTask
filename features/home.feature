Feature: Home Page

  Scenario: 001 Telnyx Home Page opened successfully and title is correct
    Given I open Telnyx home page
    Then the page title should contain "Telnyx"

  Scenario: 002 "CALL YOUR AGENT" button scrolls to the Interactive Tool Demo section
    Given I open Telnyx home page
    When I click the "CALL YOUR AGENT" button
    Then the "Interactive Tool Demo" section should be visible in the viewport
