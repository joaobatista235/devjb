import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro/SectionIntro";
import type { HeroContent, Link } from "@/types/content";
import styles from "./Hero.module.scss";

type HeroProps = HeroContent & { cta: Link };

export function Hero({ eyebrow, title, description, cta, secondaryCta, tagline, highlights }: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.backdrop} aria-hidden="true" />
      <Container className={styles.content}>
        <div className={styles.main}>
          <SectionIntro as="h1" size="display" align="center" eyebrow={eyebrow} title={title} description={description} />
          <Reveal order={1} className={styles.actions}>
            <Button withArrow href={cta.href}>{cta.label}</Button>
            <Button variant="outline" href={secondaryCta.href}>{secondaryCta.label}</Button>
          </Reveal>
        </div>
        <Reveal order={2} className={styles.principles}>
          <p>{tagline}</p>
          <ul className={styles.highlights}>
            {highlights.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
