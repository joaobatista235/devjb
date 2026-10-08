import { Reveal } from "@/components/ui/Reveal/Reveal";
import { Section } from "@/components/ui/Section/Section";
import { SectionIntro } from "@/components/ui/SectionIntro/SectionIntro";
import type { ValueContent } from "@/types/content";
import styles from "./ValueProposition.module.scss";

export function ValueProposition({ eyebrow, title, context, segmentsLabel, segments }: ValueContent) {
  return (
    <Section>
      <div className={styles.proposal}>
        <SectionIntro size="md" eyebrow={eyebrow} title={title} />
        <Reveal as="p" order={1} className={styles.context}>{context}</Reveal>
      </div>
      <div className={styles.segments}>
        <p className={styles.label}>{segmentsLabel}</p>
        <ul className={styles.chips}>
          {segments.map((name, index) => (
            <Reveal as="li" key={name} order={index} className={styles.chip}>{name}</Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
