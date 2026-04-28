import { DeckCard } from "./components/DeckCard/DeckCard";
import pageStyles from "../pageStyles.module.css";

export default function DeckPage() {
  return (
    <main className={pageStyles.page}>
      <section aria-labelledby="deck-title">
        <p className={pageStyles.eyebrow}>Study deck</p>
        <h1 className={pageStyles.title} id="deck-title">
          Today&apos;s cards
        </h1>
        <p className={pageStyles.lede}>
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
