import styles from "./DeckCard.module.css";

type DeckCardProps = {
  category: string;
  question: string;
};

export function DeckCard({ category, question }: DeckCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.meta}>
        <span className={styles.category}>{category}</span>
      </div>
      <h2 className={styles.question}>{question}</h2>
      <p className={styles.description}>
        Say your answer first, then reveal the saved explanation.
      </p>
      <div className={styles.actions}>
        <button type="button">Reveal</button>
        <button type="button">Edit</button>
      </div>
    </article>
  );
}
