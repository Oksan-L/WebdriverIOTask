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
    Then I should be redirected to the "Our Network" page C
    Then I return to the original page

    When I click the "Global Coverage" link in the Company section
    Then I should be redirected to the "Global Coverage" page C
    Then I return to the original page

    When I click the "Release Notes" link in the Company section
    Then I should be redirected to the "Release Notes" page C
    Then I return to the original page

    When I click the "Careers" link in the Company section
    Then I should be redirected to the "Careers" page C
    Then I return to the original page

    When I click the "Voice AI" link in the Company section
    Then I should be redirected to the "Voice AI" page C
    Then I return to the original page

    When I click the "AI Glossary" link in the Company section
    Then I should be redirected to the "AI Glossary" page C
    Then I return to the original page

    When I click the "Shop" link in the Company section
    Then I should be redirected to the "Shop" page C
    Then I return to the original page

  Scenario: 009 - All links in the Legal section of the footer work correctly
    Given I open the Telnyx pricing page
    When I scroll to the footer

    When I click the "Data and Privacy" link in the Legal section
    Then I should be redirected to the "Data and Privacy" page L
    Then I return to the original page

    When I click the "Report Abuse" link in the Legal section
    Then I should be redirected to the "Report Abuse" page L
    Then I return to the original page

    When I click the "Privacy Policy" link in the Legal section
    Then I should be redirected to the "Privacy Policy" page L
    Then I return to the original page

    When I click the "Cookie Policy" link in the Legal section
    Then I should be redirected to the "Cookie Policy" page L
    Then I return to the original page

    When I click the "Law Enforcement" link in the Legal section
    Then I should be redirected to the "Law Enforcement" page L
    Then I return to the original page

    When I click the "Acceptable Use" link in the Legal section
    Then I should be redirected to the "Acceptable Use" page L
    Then I return to the original page

    When I click the "Trust Center" link in the Legal section
    Then I should be redirected to the "Trust Center" page L
    Then I return to the original page

    When I click the "Country Specific Requirements" link in the Legal section
    Then I should be redirected to the "Country Specific Requirements" page L
    Then I return to the original page

    When I click the "Website Terms and Conditions" link in the Legal section
    Then I should be redirected to the "Website Terms and Conditions" page L
    Then I return to the original page

    When I click the "Terms and Conditions of Service" link in the Legal section
    Then I should be redirected to the "Terms and Conditions of Service" page L
    Then I return to the original page
