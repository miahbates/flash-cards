"use client";

import { useQuery } from "@apollo/client";
import { GetAllTags } from "../graphql/queries";
import TagSection from "./components/TagSection";
import LoadingState from "@/components/LoadingState/LoadingState";

export default function TagsPage() {
  const { data, loading, error } = useQuery(GetAllTags);

  if (loading) {
    return (
      <main className="page">
        <LoadingState text="Loading tags" />
      </main>
    );
  }

  if (error) return <p>Error: {error.message}</p>;

  return (
    <main className="page">
      <section className="intro" aria-labelledby="tags-title">
        <p className="eyebrow">Category setup</p>
        <h1 id="tags-title">Add a tag</h1>
        <p className="lede">
          Create reusable categories with a calm color palette for your cards.
        </p>
      </section>
      <TagSection tags={data?.allTags || []} />
    </main>
  );
}
