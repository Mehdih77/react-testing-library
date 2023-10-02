import { screen, render } from "../../../test-utils/testing-library-utils";
import { server } from "../../../mocks/server";
import { rest } from "msw";
import OrderConfirmation from "../OrderConfirmation";

test("error response from server to submitting order", async () => {
  server.resetHandlers(
    rest.get("http://localhost:3030/order", (req, res, ctx) =>
      res(ctx.status(500))
    )
  );

  render(<OrderConfirmation setOrderPhase={jest.fn()} />);

  const alert = await screen.findByRole("alert");
  expect(alert).toHaveTextContent(
    "An unexpected error occurred. Please try again later"
  );
});
