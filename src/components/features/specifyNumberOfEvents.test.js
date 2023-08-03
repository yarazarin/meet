import { loadFeature, defineFeature } from "jest-cucumber";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../../App";

const feature = loadFeature(
  "./src/components/features/specifyNumberOfEvents.feature"
);

defineFeature(feature, (test) => {
  test("Default number of events is 32 when not specified", ({ given, when, then }) => {
    let AppComponent;
    let NOEInput;

    given("the app is open", () => {
      AppComponent = render(<App />);
      NOEInput = AppComponent.container.querySelector("#number-of-events input");
    });

    then("the default number of events should be 32", () => {
      expect(Number(NOEInput.value)).toBe(32);
    });
  });

  test("User can change the number of visible events", ({ given, when, then }) => {
    let AppComponent;
    let NOEInput;

    given("the app is open", () => {
      AppComponent = render(<App />);
      NOEInput = AppComponent.container.querySelector("#number-of-events input");
    });

    when("the user selects a different number of events to see", async () => {
      await userEvent.type(NOEInput, "{backspace}{backspace}10");
    });

    then("the user should see the chosen number of events at once", async () => {
      const EventListDOM = AppComponent.container.querySelector("#event-list");
      let EventListItems;

      await waitFor(() => {
        EventListItems = EventListDOM.querySelectorAll("li");
        expect(EventListItems.length).toBe(10);
      });
    });
  });
});
