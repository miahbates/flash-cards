import { Tag } from "@/app/types";
import styles from "./TagSection.module.css";

interface ITagSectionProps {
  tags: Tag[];
}

const getTagHexColor = (colorName: string): string => {
  const colors: { [key: string]: string } = {
    CLAY: "#B66E41",
    LAVENDER: "#B497BD",
    MINT: "#A8D5BA",
    SAGE: "#9C9B7A",
    OCHRE: "#C9B037",
  };

  return colors[colorName] || "#000000";
};

const TagSection: React.FC<ITagSectionProps> = ({ tags }) => {
  return (
    <section className="tag-section">
      <header className="tag-section__header">
        <h2 className="tag-section__title">Tags</h2>
        <p className="tag-section__description">Browse your categories.</p>
      </header>

      <div className="tag-section__grid">
        {tags.map((tag) => (
          <div
            key={tag.id}
            className={styles.tagCard}
            style={{ backgroundColor: getTagHexColor(tag.color) }}
          >
            <span className={styles.tagName}>{tag.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TagSection;
