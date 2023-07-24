import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
    test("renders text input", () => {
        const { queryByRole } = render(<NumberOfEvents />);
        const numberInput = queryByRole("textbox");
        expect(numberInput).toBeInTheDocument();
    });

    test("updates the number of events correctly when the user types in the input field", async () => {
        const { queryByRole } = render(<NumberOfEvents />);
        const numberInput = queryByRole("textbox");
        await userEvent.type(numberInput, "10");
    });
});