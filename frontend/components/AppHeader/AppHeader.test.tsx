import { render, screen } from "@testing-library/react";
import { AppHeader } from "./AppHeader";

jest.mock("next/navigation", () => ({
  usePathname: () => "/Deck",
}));

describe("AppHeader", () => {
  it("renders the main toolbar links", () => {
    render(<AppHeader />);

    expect(screen.getByRole("link", { name: /flash cards/i })).toHaveAttribute(
      "href",
      "/",
    );
    expect(screen.getByRole("link", { name: /deck/i })).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(screen.getByRole("link", { name: /add card/i })).toHaveAttribute(
      "href",
      "/cards/new",
    );
    expect(screen.getByRole("link", { name: /tags/i })).toHaveAttribute(
      "href",
      "/tags",
    );
  });
});
