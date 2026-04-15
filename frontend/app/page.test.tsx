import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home", () => {
  it("renders the flash card starter page", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        name: /homepage here/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /dummy card one/i, level: 2 }),
    ).toBeInTheDocument();
  });
});
