import { Section } from "@/components/ui/Section/Section";
import { SectionIntro } from "@/components/ui/SectionIntro/SectionIntro";
import type { FaqContent } from "@/types/content";
import { FaqItem } from "./FaqItem";
import styles from "./Faq.module.scss";

export function Faq({ eyebrow, title, description, items }: FaqContent) {
  return (
    <Section id="faq" tone="raised">
      <div className={styles.layout}>
        <SectionIntro eyebrow={eyebrow} title={title} description={description} />
        <ul>
          {items.map((item, index) => (
            <FaqItem key={item.question} {...item} defaultOpen={index === 0} />
          ))}
        </ul>
      </div>
    </Section>
  );
}
