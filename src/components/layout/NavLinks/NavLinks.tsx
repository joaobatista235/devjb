import { cx } from "@/lib/cx";
import type { Link } from "@/types/content";
import styles from "./NavLinks.module.scss";

type NavLinksProps = { links: Link[]; label: string; className?: string };

export function NavLinks({ links, label, className }: NavLinksProps) {
  return (
    <nav aria-label={label} className={className}>
      <ul className={styles.list}>
        {links.map(({ label: text, href }) => (
          <li key={href}>
            <a className={styles.link} href={href}>{text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
