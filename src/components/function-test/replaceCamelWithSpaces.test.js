import { replaceCamelWithSpaces } from "./replaceCamelWithSpaces";

describe("spaces before camel-case capital letters", () => {
  test("Work for No inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  test("Work for One inner capital letters", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("Work for Multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
