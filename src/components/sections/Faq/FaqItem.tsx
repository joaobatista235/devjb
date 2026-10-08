"use client";

import { useId, useState } from "react";
import { Icon } from "@/components/ui/Icon/Icon";
import { cx } from "@/lib/cx";
import type { FaqItem as FaqItemData } from "@/types/content";
import styles from "./FaqItem.module.scss";

type FaqItemProps = FaqItemData & { defaultOpen?: boolean };

export function FaqItem({ question, answer, defaultOpen = false }: FaqItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <li className={styles.item}>
      <h3>
        <button
          type="button"
          className={styles.trigger}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className={cx(styles.question, open && styles.active)}>{question}</span>
          <Icon name={open ? "minus" : "plus"} size={18} />
        </button>
      </h3>
      <div id={panelId} role="region" className={styles.panel} data-open={open}>
        <div className={styles.clip}>
          <p className={styles.answer}>{answer}</p>
        </div>
      </div>
    </li>
  );
}
