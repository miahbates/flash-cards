import pageStyles from "../../pageStyles.module.css";

export default function NewCardPage() {
  return (
    <main className={pageStyles.page}>
      <section aria-labelledby="new-card-title">
        <p className={pageStyles.eyebrow}>New card</p>
        <h1 className={pageStyles.title} id="new-card-title">
          Add a card
        </h1>
        <p className={pageStyles.lede}>
          Create the question, answer, and category in one focused view.
        </p>
      </section>
    </main>
  );
}
