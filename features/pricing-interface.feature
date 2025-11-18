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
    Then the benefits section should contain correct items

  Scenario: 014 - Validate the “IoT” section structure, content, and styles
    Given I open the Telnyx pricing page
    When I scroll to the "iot" section
    Then the section "iot" should contain correct heading "IoT"
    And the section "iot" should contain exactly 1 link items
    And the link items in "iot" should have correct nested div classes "c-dnmyni-cjsPWI-backgroundColor-citron"
    And the nested divs in "iot" should have background color "rgba(211,255,166,0.95)"

  Scenario: 015 - Validate the “Networking” section structure, content, and styles
    Given I open the Telnyx pricing page
    When I scroll to the "networking" section
    Then the section "networking" should contain correct heading "Networking"
    And the section "networking" should contain exactly 2 link items
    And the link items in "networking" should have correct nested div classes "c-dnmyni-gSajfo-backgroundColor-blue"
    And the nested divs in "networking" should have background color "rgba(52,52,239,0.95)"

  Scenario: 016 - Validate the “Compute” section structure, content, and styles
    Given I open the Telnyx pricing page
    When I scroll to the "compute" section
    Then the section "compute" should contain correct heading "Compute"
    And the section "compute" should contain exactly 2 link items
    And the link items in "compute" should have correct nested div classes "c-dnmyni-dwsAeM-backgroundColor-tan"
    And the nested divs in "compute" should have background color "rgba(230,227,211,0.95)"