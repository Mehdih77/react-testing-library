import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";

const user = userEvent.setup();

describe("Summary Form", () => {
  test("initial conditions", () => {
    render(<SummaryForm />);
    const checkboxElm = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const buttonElm = screen.getByRole("button", {
      name: /confirm order/i,
    });
    expect(checkboxElm).not.toBeChecked();
    expect(buttonElm).toBeDisabled();
  });
  test("checked checkbox and enable button", async () => {
    render(<SummaryForm />);
    const checkboxElm = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const buttonElm = screen.getByRole("button", {
      name: /confirm order/i,
    });
    // first click
    await user.click(checkboxElm);
    expect(checkboxElm).toBeChecked();
    expect(buttonElm).toBeEnabled();
    // second click
    await user.click(checkboxElm);
    expect(checkboxElm).not.toBeChecked();
    expect(buttonElm).toBeDisabled();
  });
  test("popover responds to hover", async () => {
    render(<SummaryForm />);
    // popover starts out hidden
    const nullPopover = screen.queryByText(
      /no ice cream will actually be delivered/i
    );
    expect(nullPopover).not.toBeInTheDocument();

    // popover appears upon mouseover of checkbox label
    const termsAndConditions = screen.getByText(/terms and conditions/i);
    await user.hover(termsAndConditions);
    const popver = screen.getByText(/no ice cream will actually be delivered/i);
    expect(popver).toBeInTheDocument();

    // popover disappears when we mouse out
    await user.unhover(termsAndConditions);
    const nullPopoverAgain = screen.queryByText(
      /no ice cream will actually be delivered/i
    );
    expect(nullPopoverAgain).not.toBeInTheDocument();
    // await waitForElementToBeRemoved(() =>
    //   screen.queryByText(/no ice cream will actually be delivered/i)
    // );
  });
});
