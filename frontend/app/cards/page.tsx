"use client";

import LoadingState from "@/components/LoadingState/LoadingState";
import pageStyles from "../pageStyles.module.css";
import CardSection from "./components/CardSection";
import { useQuery } from "@apollo/client";
import { GetAllTags } from "../graphql/queries";

export default function CardsPage() {
  const { data, loading, error } = useQuery(GetAllTags);

  if (loading) {
    return (
      <main className={pageStyles.page}>
        <LoadingState text="Loading tags" />
      </main>
    );
  }

  if (error) return <p className={pageStyles.status}>Error: {error.message}</p>;

  return (
    <main className={pageStyles.page}>
      <section aria-labelledby="cards-title">
        <p className={pageStyles.eyebrow}>New card</p>
        <h1 className={pageStyles.title} id="cards-title">
          Add a card
        </h1>
        <p className={pageStyles.lede}>
          Create the question, answer, and category in one focused view.
        </p>
      </section>
      <CardSection tags={data?.allTags || []} />
    </main>
  );
}
