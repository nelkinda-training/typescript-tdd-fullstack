Feature: Greeting

  Scenario: Return a greeting
    When I request the greeting
    Then I should receive "Hello, World"
