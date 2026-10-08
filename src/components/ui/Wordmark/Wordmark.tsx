import styles from "./Wordmark.module.scss";

export function Wordmark({ children }: { children: string }) {
  return <a className={styles.wordmark} href="#">{children}</a>;
}
