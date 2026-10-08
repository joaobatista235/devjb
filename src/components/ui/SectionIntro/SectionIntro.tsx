import { cx } from "@/lib/cx";
import { Reveal } from "../Reveal/Reveal";
import styles from "./SectionIntro.module.scss";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
  size?: "md" | "lg" | "xl" | "display";
  align?: "start" | "center";
  className?: string;
};

export function SectionIntro({
  eyebrow, title, description, as: Heading = "h2", size = "lg", align = "start", className,
}: SectionIntroProps) {
  return (
    <Reveal className={cx(styles.intro, styles[size], align === "center" && styles.center, className)}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <Heading className={styles.title}>{title}</Heading>
      {description && <p className={styles.description}>{description}</p>}
    </Reveal>
  );
}
