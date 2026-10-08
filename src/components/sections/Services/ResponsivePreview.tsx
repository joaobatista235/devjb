import styles from "./ResponsivePreview.module.scss";

/** Ilustração decorativa: janela desktop com um celular sobreposto. */
export function ResponsivePreview() {
  return (
    <div className={styles.preview} aria-hidden="true">
      <div className={styles.desktop}>
        <span className={styles.dots}><i /><i /><i /></span>
        <span className={styles.heading} />
        <span className={styles.line} />
        <span className={styles.lineShort} />
      </div>
      <div className={styles.mobile}>
        <span className={styles.image} />
        <span className={styles.heading} />
        <span className={styles.line} />
      </div>
    </div>
  );
}
