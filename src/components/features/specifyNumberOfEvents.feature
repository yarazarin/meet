Feature: Specify number of events

  Scenario: Default number of events is 32 when not specified
    Given the app is open
    Then the default number of events should be 32

  Scenario: User can change the number of visible events
    Given the app is open
    When the user selects a different number of events to see
    Then the user should see the chosen number of events at once
