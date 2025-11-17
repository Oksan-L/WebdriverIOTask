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

  Scenario: 012 - Verify the “Volume-based pricing” block UI on the Pricing page
    Given I open the Telnyx pricing page
    When I scroll to the Volume-based pricing block

    Then the Volume-based pricing block background should be correct
    Then the Volume-based pricing title should be visible and correct
    Then the Volume-based pricing subtitle should be visible and correct
    Then the Volume-based pricing block should have 3 checkmark blocks
    Then the Volume-based pricing block should have 3 checkmark texts
    Then all Volume-based pricing checkmark texts should be visible

  Scenario: 013 - Validate the “Enjoy all the benefits at no extra cost” section structure, content, and styles
    Given I open the Telnyx pricing page
    When I scroll to the benefits section

    Then the benefits section should exist
    Then the benefits section title should be visible and correct
    Then the benefits section should contain exactly one list
    Then the benefits list should have 3 items
    Then each benefit item should contain one heading and one paragraph
