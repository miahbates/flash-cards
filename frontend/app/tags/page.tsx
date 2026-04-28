"use client";

import { useQuery } from "@apollo/client";
import { GetAllTags } from "../graphql/queries";
import TagSection from "./components/TagSection";
import LoadingState from "@/components/LoadingState/LoadingState";
import pageStyles from "../pageStyles.module.css";

export default function TagsPage() {
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
      <section aria-labelledby="tags-title">
        <p className={pageStyles.eyebrow}>Category setup</p>
        <h1 className={pageStyles.title} id="tags-title">
          Add a tag
        </h1>
        <p className={pageStyles.lede}>
          Create reusable categories with a calm color palette for your cards.
        </p>
      </section>
      <TagSection tags={data?.allTags || []} />
    </main>
  );
}
