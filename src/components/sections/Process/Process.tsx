import { Icon } from "@/components/ui/Icon/Icon";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { Section } from "@/components/ui/Section/Section";
import { SectionIntro } from "@/components/ui/SectionIntro/SectionIntro";
import type { ProcessContent } from "@/types/content";
import styles from "./Process.module.scss";

export function Process({ eyebrow, title, description, steps }: ProcessContent) {
  const lastIndex = steps.length - 1;

  return (
    <Section id="processo" gap="lg">
      <SectionIntro className={styles.intro} eyebrow={eyebrow} title={title} description={description} />
      <ol className={styles.steps}>
        {steps.map((step, index) => (
          <Reveal as="li" key={step.title} order={index} className={styles.step}>
            <div className={styles.connector} aria-hidden="true">
              <span className={styles.line} />
              <Icon name={index === lastIndex ? "check" : "arrow-right"} size={18} />
            </div>
            <h3 className={styles.name}>
              <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span> {step.title}
            </h3>
            <p className={styles.description}>{step.description}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
