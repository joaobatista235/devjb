import { Section } from "@/components/ui/Section/Section";
import { SectionIntro } from "@/components/ui/SectionIntro/SectionIntro";
import type { ServicesContent } from "@/types/content";
import { ServiceCard } from "./ServiceCard";
import styles from "./Services.module.scss";

export function Services({ eyebrow, title, description, primary, reach }: ServicesContent) {
  return (
    <Section id="servicos" tone="raised">
      <SectionIntro className={styles.intro} eyebrow={eyebrow} title={title} description={description} />
      <div className={styles.groups}>
        <ul className={styles.primary}>
          {primary.map((item, index) => (
            <ServiceCard key={item.title} {...item} order={index} size="tall" />
          ))}
        </ul>
        <ul className={styles.reach}>
          {reach.map((item, index) => (
            <ServiceCard key={item.title} {...item} order={index} size="short" />
          ))}
        </ul>
      </div>
    </Section>
  );
}
