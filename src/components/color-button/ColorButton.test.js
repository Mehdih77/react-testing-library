import { screen, render, fireEvent } from "@testing-library/react";
import ColorButton from "./ColorButton";

test("render color button", () => {
  render(<ColorButton />);
  const buttonElm = screen.getByRole("button", { name: "Change to blue" });
  expect(buttonElm).toHaveStyle({ backgroundColor: "red" });
  // click the button
  fireEvent.click(buttonElm);
  expect(buttonElm).toHaveStyle({ backgroundColor: "blue" });
  expect(buttonElm.textContent).toBe("Change to red");
});
