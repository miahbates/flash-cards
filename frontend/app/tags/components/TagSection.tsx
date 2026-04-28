import { Tag } from "@/app/types";
import styles from "./TagSection.module.css";
import { useState } from "react";
import ComingSoonBanner from "@/components/ComingSoonBanner/ComingSoonBanner";
import { useMutation } from "@apollo/client";
import { CreateTag } from "@/app/graphql/mutations";

interface ITagSectionProps {
  tags: Tag[];
}

const colors = ["CLAY", "LAVENDER", "MINT", "SAGE", "OCHRE"];

const TagSection: React.FC<ITagSectionProps> = ({ tags }) => {
  const [selectedTag, setSelectedTag] = useState("");
  const [newTagName, setNewTagName] = useState("");
  const [newTagColor, setNewTagColor] = useState(colors[0]);

  const [createTag] = useMutation(CreateTag, {
    refetchQueries: ["GetAllTags"],
    onCompleted: (data) => {
      console.log("Tag created:", data.createTag);
    },
    onError: (error) => {
      console.error("Error creating tag:", error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createTag({
      variables: { name: newTagName, color: newTagColor.toLocaleLowerCase() },
    });
  };

  const handleClear = () => {
    setNewTagName("");
    setNewTagColor(colors[0]);
  };

  return (
    <section>
      <div className={styles.tagSection}>
        <div className={styles.tagSectionCard}>
          <form onSubmit={handleSubmit} className={styles.tagForm}>
            <div className={styles.formGroup}>
              <label className={styles.colorLabel} htmlFor="new-tag">
                Add a new tag
              </label>
              <input
                className={styles.tagInput}
                value={newTagName}
                onChange={(e) => setNewTagName(e.target.value)}
                id="new-tag"
                type="text"
                placeholder="Add a new tag..."
              />
            </div>
            <div>
              <p className={styles.colorLabel}>Color</p>
              <div className={styles.colorOptions}>
                {colors.map((color) => (
                  <button
                    key={color}
                    className={styles.colorOption}
                    data-color={color}
                    data-selected={newTagColor === color}
                    onClick={() =>
                      newTagColor === color
                        ? setNewTagColor("")
                        : setNewTagColor(color)
                    }
                  />
                ))}
              </div>
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
        <div className={styles.tagSectionCard}>
          <h2 className={styles.title}>Tag Library</h2>
          <p className={styles.description}>
            Create once, reuse when adding or editing cards.
          </p>
          <ul className={styles.existingTags}>
            {tags.map((tag) => (
              <li key={tag.id}>
                <button
                  onClick={() =>
                    selectedTag === tag.id
                      ? setSelectedTag("")
                      : setSelectedTag(tag.id)
                  }
                  className={styles.tagCard}
                  data-color={tag.color}
                  data-selected={selectedTag === tag.id}
                >
                  <span className={styles.tagName}>{tag.name}</span>
                </button>
              </li>
            ))}
          </ul>
          <ComingSoonBanner text="Tag management coming soon! 🌟" />
        </div>
      </div>
    </section>
  );
};

export default TagSection;
