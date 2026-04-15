import { render, screen } from "@testing-library/react";
import { DeckCard } from "./DeckCard";

describe("DeckCard", () => {
  it("renders the active deck card", () => {
    render(
      <DeckCard
        category="GraphQL"
        position="3 / 8"
        question="What problem does GraphQL solve?"
      />,
    );

    expect(
      screen.getByRole("heading", {
        name: /what problem does graphql solve/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("GraphQL")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /reveal/i })).toBeInTheDocument();
  });
});
