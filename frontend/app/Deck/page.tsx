import { DeckCard } from "./components/DeckCard/DeckCard";

export default function DeckPage() {
  return (
    <main className="page">
      <section className="intro" aria-labelledby="deck-title">
        <p className="eyebrow">Study deck</p>
        <h1 id="deck-title">Today&apos;s cards</h1>
        <p className="lede">
          Move through the deck, reveal the answer, and tune cards as you go.
        </p>
      </section>

      <DeckCard
        category="GraphQL"
        question="What problem does GraphQL solve?"
      />
    </main>
  );
}
