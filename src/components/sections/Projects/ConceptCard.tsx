import { Reveal } from "@/components/ui/Reveal/Reveal";
import type { ConceptContent, ProjectsContent } from "@/types/content";
import { ConceptMockup } from "./ConceptMockup";
import styles from "./ConceptCard.module.scss";

type ConceptCardProps = ConceptContent & { chrome: ProjectsContent["mockup"]; order: number };

export function ConceptCard({ caption, title, chrome, order, ...mockup }: ConceptCardProps) {
  return (
    <Reveal as="figure" order={order} className={styles.card}>
      <ConceptMockup chrome={chrome} {...mockup} />
      <figcaption className={styles.caption}>
        <span className={styles.kicker}>{caption}</span>
        <span className={styles.title}>{title}</span>
      </figcaption>
    </Reveal>
  );
}
