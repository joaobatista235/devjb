import { Button } from "@/components/ui/Button/Button";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { Section } from "@/components/ui/Section/Section";
import { SectionIntro } from "@/components/ui/SectionIntro/SectionIntro";
import type { InvestmentContent, Link } from "@/types/content";
import styles from "./Investment.module.scss";

export function Investment({ eyebrow, title, description, cta }: InvestmentContent & { cta: Link }) {
  return (
    <Section flushTop>
      <div className={styles.card}>
        <SectionIntro className={styles.intro} size="md" eyebrow={eyebrow} title={title} description={description} />
        <Reveal order={1}>
          <Button withArrow href={cta.href}>{cta.label}</Button>
        </Reveal>
      </div>
    </Section>
  );
}
