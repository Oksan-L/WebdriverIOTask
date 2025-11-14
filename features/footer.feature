Feature: Footer links

  Scenario: 006 - Footer logo link redirects to the Home Page
    Given I open the Telnyx pricing page
    When I scroll to the footer
    And I click the Telnyx logo in the footer
    Then I should be redirected to the Telnyx homepage

  Scenario: 007 - Verify social media links redirect to correct pages
    Given I open the Telnyx pricing page
    When I scroll to the footer
    
    When I click the "LinkedIn" icon in the footer
    Then I should be redirected to the "LinkedIn" page
    Then I return to the original page

    When I click the "Twitter" icon in the footer
    Then I should be redirected to the "Twitter" page
    Then I return to the original page

    When I click the "Facebook" icon in the footer
    Then I should be redirected to the "Facebook" page
    Then I return to the original page

  Scenario: 008 - All links in the Company section work correctly
    Given I open the Telnyx pricing page
    When I scroll to the footer

    When I click the "Our Network" link in the Company section
    Then I should be redirected to the "Our Network" page 2
    Then I return to the original page

    When I click the "Global Coverage" link in the Company section
    Then I should be redirected to the "Global Coverage" page 2
    Then I return to the original page

    When I click the "Release Notes" link in the Company section
    Then I should be redirected to the "Release Notes" page 2
    Then I return to the original page

    When I click the "Careers" link in the Company section
    Then I should be redirected to the "Careers" page 2
    Then I return to the original page

    When I click the "Voice AI" link in the Company section
    Then I should be redirected to the "Voice AI" page 2
    Then I return to the original page

    When I click the "AI Glossary" link in the Company section
    Then I should be redirected to the "AI Glossary" page 2
    Then I return to the original page

    When I click the "Shop" link in the Company section
    Then I should be redirected to the "Shop" page 2
    Then I return to the original page
