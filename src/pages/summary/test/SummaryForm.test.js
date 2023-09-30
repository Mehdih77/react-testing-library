import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

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
  test("checked checkbox and enable button", () => {
    render(<SummaryForm />);
    const checkboxElm = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const buttonElm = screen.getByRole("button", {
      name: /confirm order/i,
    });
    // first click
    fireEvent.click(checkboxElm);
    expect(checkboxElm).toBeChecked();
    expect(buttonElm).toBeEnabled();
    // second click
    fireEvent.click(checkboxElm);
    expect(checkboxElm).not.toBeChecked();
    expect(buttonElm).toBeDisabled();
  });
});
