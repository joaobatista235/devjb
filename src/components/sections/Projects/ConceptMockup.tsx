import type { CSSProperties } from "react";
import type { ConceptContent, ConceptTheme, ProjectsContent } from "@/types/content";
import styles from "./ConceptMockup.module.scss";

type ConceptMockupProps = Pick<ConceptContent, "theme" | "category" | "headline" | "description"> & {
  chrome: ProjectsContent["mockup"];
};

const toCssVars = ({ stage, window, chrome, panel, accent, shape }: ConceptTheme) =>
  ({
    "--stage": stage,
    "--window": window,
    "--chrome": chrome,
    "--panel": panel,
    "--accent": accent,
    "--shape-from": shape.colors[0],
    "--shape-mid": shape.colors[1],
    "--shape-to": shape.colors[2],
    "--shape-width": shape.width,
    "--shape-height": shape.height,
  }) as CSSProperties;

/** Ilustração decorativa de uma janela de site; todas as medidas escalam com a largura da janela. */
export function ConceptMockup({ theme, category, headline, description, chrome }: ConceptMockupProps) {
  return (
    <div className={styles.stage} style={toCssVars(theme)} aria-hidden="true">
      <div className={styles.window}>
        <div className={styles.screen}>
          <div className={styles.bar}>
            <span className={styles.dots}><i /><i /><i /></span>
            <span className={styles.barLabel}>{chrome.label}</span>
          </div>
          <div className={styles.header}>
            <span className={styles.category}>{category}</span>
            <span className={styles.menu}>{chrome.menu.map((item) => <span key={item}>{item}</span>)}</span>
          </div>
          <div className={styles.body}>
            <div className={styles.presentation}>
              <p className={styles.headline}>{headline}</p>
              <p className={styles.description}>{description}</p>
              <span className={styles.cta}>{chrome.cta}</span>
            </div>
            <div className={styles.panel}><span className={styles.shape} /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
