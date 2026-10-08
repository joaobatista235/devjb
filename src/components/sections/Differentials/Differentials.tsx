import { Icon } from "@/components/ui/Icon/Icon";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { Section } from "@/components/ui/Section/Section";
import { SectionIntro } from "@/components/ui/SectionIntro/SectionIntro";
import type { DifferentialsContent } from "@/types/content";
import styles from "./Differentials.module.scss";

export function Differentials({ eyebrow, title, description, items }: DifferentialsContent) {
  return (
    <Section>
      <div className={styles.layout}>
        <SectionIntro eyebrow={eyebrow} title={title} description={description} />
        <ul className={styles.list}>
          {items.map(({ icon, title: name, description: text }, index) => (
            <Reveal as="li" key={name} order={index} className={styles.item}>
              <span className={styles.icon}><Icon name={icon} size={22} /></span>
              <div className={styles.info}>
                <h3 className={styles.title}>{name}</h3>
                <p className={styles.description}>{text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
