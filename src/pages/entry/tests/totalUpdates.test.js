import { render, screen } from "../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import Options from "../Options";

const user = userEvent.setup();

test("update scoop subtotal when scoops change", async () => {
  render(<Options optionType="scoops" />);
  // make sure total starts out $0.00
  const scoopsSubtotal = screen.getByText("Scoops total: $", { exact: false });
  expect(scoopsSubtotal).toHaveTextContent("0.00");
  // update vanilla scoops to 1 and check the subtotal
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });
  await user.clear(vanillaInput);
  await user.type(vanillaInput, "1");
  expect(scoopsSubtotal).toHaveTextContent("2.00");
  // update chocolate scoops to 2 and check subtotal
  const chocolateInput = await screen.findByRole("spinbutton", {
    name: "Chocolate",
  });
  await user.clear(chocolateInput);
  await user.type(chocolateInput, "2");
  expect(scoopsSubtotal).toHaveTextContent("6.00");
});

test("update topping subtotal when topping change", async () => {
  render(<Options optionType="toppings" />);
  const toppingsTotal = screen.getByText("Toppings total: $", {
    exact: false,
  });
  expect(toppingsTotal).toHaveTextContent("0.00");

  // add cherries and check subtotal
  const cherriesCheckbox = await screen.findByRole("checkbox", {
    name: "Cherries",
  });
  await user.click(cherriesCheckbox);
  expect(toppingsTotal).toHaveTextContent("1.50");

  // add Hot fudge and check subtotal
  const hotFudgeCheckbox = screen.getByRole("checkbox", {
    name: "Hot fudge",
  });
  await user.click(hotFudgeCheckbox);
  expect(toppingsTotal).toHaveTextContent("3.00");

  // remove hot fudge and check subtotal
  await user.click(hotFudgeCheckbox);
  expect(toppingsTotal).toHaveTextContent("1.50");
});
