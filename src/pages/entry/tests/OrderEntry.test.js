import {
  screen,
  render,
  waitFor,
} from "../../../test-utils/testing-library-utils";
import { server } from "../../../mocks/server";
import { rest } from "msw";
import OrderEntry from "../OrderEntry";
import userEvent from "@testing-library/user-event";
test("handle errors for scoops and topping routes", async () => {
  server.resetHandlers(
    rest.get("http://localhost:3030/scoops", (req, res, ctx) =>
      res(ctx.status(500))
    ),
    rest.get("http://localhost:3030/toppings", (req, res, ctx) =>
      res(ctx.status(500))
    )
  );
  //* jest.fn() not need here cuz it test the error but we use it for sure
  render(<OrderEntry setOrderPhase={jest.fn()} />);
  // with "waitFor" in here we wait for get all data
  // BUT with "findAllByRole" we wait for the first response of data
  await waitFor(async () => {
    const alerts = await screen.findAllByRole("alert");
    expect(alerts).toHaveLength(2);
  });
});
test("should disabled button if we dont have any scoops", async () => {
  const user = userEvent.setup();
  render(<OrderEntry setOrderPhase={jest.fn()} />);

  const orderButton = screen.getByRole("button", { name: /Order Sundae/i });
  expect(orderButton).toBeDisabled();

  // add scoop
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: /vanilla/i,
  });
  await user.clear(vanillaInput);
  await user.type(vanillaInput, "1");
  expect(orderButton).toBeEnabled();

  // remove scoop and expect button to be disabled
  await user.clear(vanillaInput);
  await user.type(vanillaInput, "0");
  expect(orderButton).toBeDisabled();
});

//! jest.fn():
// using that jest mock function as a placeholder when there is
// a function props and as you will recall this is needed when
// the component that you are rendering has a props
// that is a function that is going to get run during the course of the test
// but is not actually important to test itelf
// if it is going to get run, you need to includes it as a prop
// Or you are going to get errors in your tests
