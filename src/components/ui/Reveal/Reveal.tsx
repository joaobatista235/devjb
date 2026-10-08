"use client";

import type { CSSProperties, ElementType, ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { cx } from "@/lib/cx";
import styles from "./Reveal.module.scss";

type RevealProps = {
  as?: ElementType;
  /** Posição na sequência de entrada; multiplica o `--stagger` global. */
  order?: number;
  className?: string;
  children: ReactNode;
};

export function Reveal({ as: Tag = "div", order = 0, className, children }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <Tag
      ref={ref}
      data-visible={inView}
      className={cx(styles.reveal, className)}
      style={{ "--order": order } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
