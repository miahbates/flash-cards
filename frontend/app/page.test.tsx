import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home", () => {
  it("renders the flash card starter page", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        name: /build the deck one useful prompt at a time/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /django admin/i, level: 2 }),
    ).toBeInTheDocument();
  });
});
