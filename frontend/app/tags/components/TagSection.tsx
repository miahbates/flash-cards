import { Tag } from "@/app/types";
import styles from "./TagSection.module.css";
import { useState } from "react";
import ComingSoonBanner from "@/components/ComingSoonBanner/ComingSoonBanner";

interface ITagSectionProps {
  tags: Tag[];
}

const TagSection: React.FC<ITagSectionProps> = ({ tags }) => {
  const [selectedTag, setSelectedTag] = useState("");
  return (
    <section>
      <div className={styles.tagSection}>
        <div className={styles.tagSectionCard}>initial card</div>
        <div className={styles.tagSectionCard}>
          <p className={styles.title}>Tag Library</p>
          <p className={styles.description}>
            Create once, reuse when adding or editing cards.
          </p>
          <div className={styles.tagGrid}>
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
