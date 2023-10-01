import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Options from "../Options";
test("update scoop subtotal when scoop change", async () => {
  render(<Options optionType="scoops" />);

  // make sure total starts out $0.00
  const scoopSubtotla = screen.getByText("Scoops total: $", { exact: false });
  expect(scoopSubtotla).toHaveTextContent("0.00");

  // update vanilla scoops to 1 and check the subtoal
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, "1");
  expect(scoopSubtotla).toHaveTextContent("2.00");

  // update chocolate scoops to 2 adn check subtotal
  const chocolateInput = await screen.findByRole("spinbutton", {
    name: "Chocolate",
  });
  userEvent.clear(chocolateInput);
  userEvent.type(chocolateInput, "2");
  expect(scoopSubtotla).toHaveTextContent("6.00");
});
