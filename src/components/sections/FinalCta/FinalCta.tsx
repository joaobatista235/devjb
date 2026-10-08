import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro/SectionIntro";
import type { FinalCtaContent, Link } from "@/types/content";
import styles from "./FinalCta.module.scss";

export function FinalCta({ eyebrow, title, description, cta }: FinalCtaContent & { cta: Link }) {
  return (
    <section id="contato" className={styles.cta}>
      <Container className={styles.content}>
        <SectionIntro size="xl" align="center" eyebrow={eyebrow} title={title} description={description} />
        <Reveal order={1}>
          <Button withArrow href={cta.href}>{cta.label}</Button>
        </Reveal>
      </Container>
    </section>
  );
}
