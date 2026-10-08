import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { Wordmark } from "@/components/ui/Wordmark/Wordmark";
import type { Link } from "@/types/content";
import { NavLinks } from "../NavLinks/NavLinks";
import styles from "./SiteHeader.module.scss";

type SiteHeaderProps = { brand: string; links: Link[]; cta: Link };

export function SiteHeader({ brand, links, cta }: SiteHeaderProps) {
  return (
    <Reveal as="header" className={styles.header}>
      <Container width="wide" className={styles.bar}>
        <Wordmark>{brand}</Wordmark>
        <NavLinks links={links} label="Principal" className={styles.nav} />
        <Button size="sm" withArrow href={cta.href} className={styles.cta}>{cta.label}</Button>
      </Container>
    </Reveal>
  );
}
