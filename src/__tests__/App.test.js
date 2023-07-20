import { render } from "@testing-library/react";
import App from "../App.js";

describe("<App /> component", () => {
  test("renders list of events", () => {
    const { container } = render(<App />)
    expect(container.querySelector("#event-list")).toBeInTheDocument();
  });
});
