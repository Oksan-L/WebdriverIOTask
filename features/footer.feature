Feature: Footer links

  Scenario: 006 - Footer logo link redirects to the Home Page
    Given I open the Telnyx pricing page
    When I scroll to the footer
    And I click the Telnyx logo in the footer
    Then I should be redirected to the Telnyx homepage
