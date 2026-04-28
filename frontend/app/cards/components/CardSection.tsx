"use client";

import { useState } from "react";
import styles from "./CardSection.module.css";
import ComingSoonBanner from "@/components/ComingSoonBanner/ComingSoonBanner";
import { Card, Tag } from "@/app/types";
import { CheckCircleIcon } from "@phosphor-icons/react";
import { useMutation, useQuery } from "@apollo/client";
import { CreateCard } from "@/app/graphql/mutations";
import GetAllCards from "@/app/graphql/queries/get-all-cards";

interface ICardSection {
  tags?: Tag[];
}
const CardSection: React.FC<ICardSection> = ({ tags = [] }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedTagIds, setSelectedTagIds] = useState<string[]>([]);
  const [createCard] = useMutation(CreateCard, {
    refetchQueries: ["GetAllCards"],
  });

  const { data } = useQuery(GetAllCards);
  console.log("🚀 ~ CardSection ~ data:", data);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    createCard({
      variables: { name, description, tags: selectedTagIds },
    });
  };

  const handleClear = () => {
    setName("");
    setDescription("");
    setSelectedTagIds([]);
  };

  const handleTagSelection = (tag: Tag) => {
    if (selectedTagIds.includes(tag.id)) {
      setSelectedTagIds((prev) => prev.filter((id) => id !== tag.id));
    } else {
      setSelectedTagIds((prev) => [...prev, tag.id]);
    }
  };

  return (
    <>
      <div className={styles.cardSection}>
        <div className={styles.cardSectionCard}>
          <form onSubmit={(e) => handleSave(e)} className={styles.cardForm}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="name">
                Name
              </label>
              <input
                className={styles.cardInput}
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                type="text"
                placeholder="What is a resolver?"
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="description">
                Description
              </label>
              <textarea
                className={styles.cardInput}
                placeholder="The function that returns data for a GraphQL field"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className={styles.existingTags}>
              <p className={styles.label}>Category</p>
              {tags.map((tag) => (
                <button
                  key={tag.id}
                  type="button"
                  onClick={() => handleTagSelection(tag)}
                  className={styles.tagCard}
                  data-color={tag.color}
                  data-selected={selectedTagIds.includes(tag.id)}
                >
                  <span className={styles.tagName}>{tag.name}</span>
                  {selectedTagIds.includes(tag.id) && (
                    <CheckCircleIcon className={styles.checkIcon} />
                  )}
                </button>
              ))}
            </div>
            <div className={styles.formButtons}>
              <button type="submit" className={styles.saveButton}>
                Save
              </button>
              <button
                type="button"
                onClick={handleClear}
                className={styles.clearButton}
              >
                Clear
              </button>
            </div>
          </form>
        </div>
        <div
          className={styles.cardSectionCard}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ComingSoonBanner text="Preview coming soon! 🌟" />
        </div>
      </div>
      Cards created:
      {data?.allCards.map((card: Card) => (
        <>
          <p> id: {card.id}</p>
          <p> Question: {card.name}</p>
          <p> Answer: {card.description}</p>
        </>
      ))}
    </>
  );
};

export default CardSection;
