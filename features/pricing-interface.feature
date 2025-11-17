Feature: Pricing Page Interface checks

  Scenario: 011 - Verify the “Pay as you go” block UI on the Pricing page						
    Given I open the Telnyx pricing page
    When I scroll to the Pay as you go block

    Then the Pay as you go block background should be correct
    Then the Pay as you go block should have correct classes
    Then the Pay as you go title should be visible and correct
    Then the Pay as you go title should have correct classes
    Then the Pay as you go subtitle should be visible and correct
    Then the Pay as you go subtitle should have correct classes
    Then the Pay as you go checkmark texts count should be 3
    Then all Pay as you go checkmark texts should be visible
