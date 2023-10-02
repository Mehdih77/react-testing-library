import { render, screen } from "@testing-library/react";
// import { screen, render } from "../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import ScoopOptions from "../ScoopOption";

test("check correct class", async () => {
  const user = userEvent.setup();
  render(<ScoopOptions name="" imagePath="" updateItemCount={jest.fn()} />);

  // negative number
  const vanillaInput = screen.getByRole("spinbutton"); // just we need spinbutton cuz we dont pass the name from props in line 7
  await user.clear(vanillaInput);
  await user.type(vanillaInput, "-1");
  expect(vanillaInput).toHaveClass("is-invalid");

  // decimal input
  await user.clear(vanillaInput);
  await user.type(vanillaInput, "3.5");
  expect(vanillaInput).toHaveClass("is-invalid");
  // too high
  await user.clear(vanillaInput);
  await user.type(vanillaInput, "12");
  expect(vanillaInput).toHaveClass("is-invalid");

  // correct
  await user.clear(vanillaInput);
  await user.type(vanillaInput, "2");
  expect(vanillaInput).not.toHaveClass("is-invalid");
});
