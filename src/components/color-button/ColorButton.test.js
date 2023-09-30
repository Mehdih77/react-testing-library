import { screen, render, fireEvent } from "@testing-library/react";
import ColorButton from "./ColorButton";

test("color button has correct initial color", () => {
  render(<ColorButton />);
  const buttonElm = screen.getByRole("button", { name: "Change to blue" });
  expect(buttonElm).toHaveStyle({ backgroundColor: "red" });
  // click the button
  fireEvent.click(buttonElm);
  expect(buttonElm).toHaveStyle({ backgroundColor: "blue" });
  expect(buttonElm.textContent).toBe("Change to red");
});
test("color button checkbox inintial condition", () => {
  render(<ColorButton />);
  const buttonElm = screen.getByRole("button", { name: "Change to blue" });
  expect(buttonElm).toBeEnabled();
  const checkboxElm = screen.getByRole("checkbox");
  expect(checkboxElm).not.toBeChecked();
});
test("checkbox disabled button on first click and enabled in second click", () => {
  render(<ColorButton />);
  const buttonElm = screen.getByRole("button", { name: "Change to blue" });
  const checkboxElm = screen.getByRole("checkbox");
  // changed the checkbox
  fireEvent.click(checkboxElm);
  expect(buttonElm).toBeDisabled();
  fireEvent.click(checkboxElm);
  expect(buttonElm).toBeEnabled();
});
