const sampleCards = [
  {
    id: 1,
    name: "Dummy card one",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus.",
  },
  {
    id: 2,
    name: "Dummy card two",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
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
        {sampleCards.map((card) => (
          <article className="card" key={card.id}>
            <span>#{card.id}</span>
            <h2>{card.name}</h2>
            <p>{card.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
