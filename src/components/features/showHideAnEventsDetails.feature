Feature: SHOW/HIDE EVENT DETAILS
    Scenario: By default, event elements are collapsed
        Given that the user opens the app
        When the upcoming events list is displayed
        Then each event element should be collapsed, displaying only basic event information

    Scenario: User can expand an event to view details
        Given that the user opens the app and the upcoming events list is displayed
        When the user clicks on an event element
        Then the event element should expand, showing additional details about the event

    Scenario: User can collapse an event to hide details
        Given that the user opens the app and clicks on the "show details" button of the first event
        When the user clicks on the "hide details" button
        Then the event element should collapse, hiding the additional details about the event