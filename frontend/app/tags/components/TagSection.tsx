import { Tag } from "@/app/types";
import styles from "./TagSection.module.css";
import { useState } from "react";
import ComingSoonBanner from "@/components/ComingSoonBanner/ComingSoonBanner";

interface ITagSectionProps {
  tags: Tag[];
}

const colors = ["CLAY", "LAVENDER", "MINT", "SAGE", "OCHRE"];

const TagSection: React.FC<ITagSectionProps> = ({ tags }) => {
  const [selectedTag, setSelectedTag] = useState("");
  const [newTagName, setNewTagName] = useState("");
  const [newTagColor, setNewTagColor] = useState(colors[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ newTagName, newTagColor });
  };

  const handleClearClick = () => {
    setNewTagName("");
    setNewTagColor(colors[0]);
  };

  return (
    <section>
      <div className={styles.tagSection}>
        <div className={styles.tagSectionCard}>
          <form className={styles.tagForm}>
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
                  <div
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
              <button
                type="submit"
                onClick={handleSubmit}
                className={styles.saveButton}
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleClearClick}
                className={styles.clearButton}
              >
                Clear
              </button>
            </div>
          </form>
        </div>
        <div className={styles.tagSectionCard}>
          <p className={styles.title}>Tag Library</p>
          <p className={styles.description}>
            Create once, reuse when adding or editing cards.
          </p>
          <div className={styles.existingTags}>
            {tags.map((tag) => (
              <div
                key={tag.id}
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
              </div>
            ))}
          </div>
          <ComingSoonBanner text="Tag management coming soon! 🌟" />
        </div>
      </div>
    </section>
  );
};

export default TagSection;
