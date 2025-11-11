Feature: Top navigation bar

  Scenario: 003 - Telnyx logo in the top navigation bar redirects to the homepage
    Given I open the Telnyx pricing page
    When I click the Telnyx logo in the top navigation bar
    Then I should be redirected to the Telnyx homepage
    
  Scenario: 004 - “Sign Up” button redirects to the signup page
      Given I open the Telnyx Pricing page
      When I click the "Sign Up" button in the top navigation bar
      Then I should be redirected to the signup page
      And the signup form should be visible