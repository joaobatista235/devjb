import { Reveal } from "@/components/ui/Reveal/Reveal";
import { Section } from "@/components/ui/Section/Section";
import { SectionIntro } from "@/components/ui/SectionIntro/SectionIntro";
import type { ProjectsContent } from "@/types/content";
import { ConceptCard } from "./ConceptCard";
import styles from "./Projects.module.scss";

export function Projects({ eyebrow, title, description, status, mockup, concepts }: ProjectsContent) {
  return (
    <Section id="projetos" tone="raised">
      <div className={styles.header}>
        <SectionIntro className={styles.intro} eyebrow={eyebrow} title={title} description={description} />
        <Reveal order={1} className={styles.status}>{status}</Reveal>
      </div>
      <div className={styles.concepts}>
        {concepts.map((concept, index) => (
          <ConceptCard key={concept.title} {...concept} chrome={mockup} order={index} />
        ))}
      </div>
    </Section>
  );
}
