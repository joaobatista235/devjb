import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import { Container } from "../Container/Container";
import styles from "./Section.module.scss";

type SectionProps = {
  id?: string;
  tone?: "base" | "raised";
  gap?: "md" | "lg";
  flushTop?: boolean;
  children: ReactNode;
};

export function Section({ id, tone = "base", gap = "md", flushTop = false, children }: SectionProps) {
  return (
    <section id={id} className={cx(styles.section, styles[tone], flushTop && styles.flushTop)}>
      <Container className={cx(styles.stack, styles[gap])}>{children}</Container>
    </section>
  );
}
