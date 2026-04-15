type DeckCardProps = {
  category: string;
  question: string;
  position: string;
};

export function DeckCard({ category, position, question }: DeckCardProps) {
  return (
    <article className="deck-card">
      <div className="deck-card__meta">
        <span className="deck-card__category">{category}</span>
        <span>{position}</span>
      </div>
      <h2>{question}</h2>
      <p>Say your answer first, then reveal the saved explanation.</p>
      <div className="deck-card__actions">
        <button type="button">Reveal</button>
        <button type="button">Edit</button>
      </div>
    </article>
  );
}
