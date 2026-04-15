const instructions = [
  {
    id: 1,
    name: "Add a tag",
    description: "Add a tag to your flash card to categorise it.",
  },
  {
    id: 2,
    name: "Add a card",
    description: "Add a new flash card to your collection.",
  },
  {
    id: 3,
    name: "Review cards",
    description: "Review your flash cards to reinforce your learning.",
  },
];

export default function Home() {
  return (
    <main className="page">
      <section className="intro" aria-labelledby="page-title">
        <p className="eyebrow">Flash cards</p>
        <h1 id="page-title">Homepage here</h1>
        <p className="lede">This is a starter project for a flash cards.</p>
      </section>

      <section className="cards" aria-label="Starter cards">
        {instructions.map((instruction) => (
          <article className="card" key={instruction.id}>
            <span>#{instruction.id}</span>
            <h2>{instruction.name}</h2>
            <p>{instruction.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
