Feature: Home Page
  Scenario: Telnyx Home Page opened successfully and title is correct
    Given I open Telnyx home page
    Then the page title should contain Telnyx
