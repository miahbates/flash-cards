"use client";

import { useState } from "react";
import styles from "./CardSection.module.css";
import ComingSoonBanner from "@/components/ComingSoonBanner/ComingSoonBanner";
import { Tag } from "@/app/types";
import { CheckCircleIcon } from "@phosphor-icons/react";

interface ICardSection {
  tags?: Tag[];
}
const CardSection: React.FC<ICardSection> = ({ tags = [] }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [selectedTagIds, setSelectedTagIds] = useState<string[]>([]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ question, answer, selectedTagIds });
  };

  const handleClear = () => {
    setQuestion("");
    setAnswer("");
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
    <div className={styles.cardSection}>
      <div className={styles.cardSectionCard}>
        <form onSubmit={(e) => handleSave(e)} className={styles.cardForm}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="question">
              Add a new tag
            </label>
            <input
              className={styles.cardInput}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              id="question"
              type="text"
              placeholder="What is a resolver?"
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="answer">
              Answer
            </label>
            <textarea
              className={styles.cardInput}
              placeholder="The function that returns data for a GraphQL field"
              id="answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
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
  );
};

export default CardSection;
