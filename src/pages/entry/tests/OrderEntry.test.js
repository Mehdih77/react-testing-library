import {
  screen,
  render,
  waitFor,
} from "../../../test-utils/testing-library-utils";
import { server } from "../../../mocks/server";
import { rest } from "msw";
import OrderEntry from "../OrderEntry";
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

//! jest.fn():
// using that jest mock function as a placeholder when there is 
// a function props and as you will recall this is needed when
// the component that you are rendering has a props
// that is a function that is going to get run during the course of the test
// but is not actually important to test itelf
// if it is going to get run, you need to includes it as a prop
// Or you are going to get errors in your tests
