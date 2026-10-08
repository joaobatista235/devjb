import { Container } from "@/components/ui/Container/Container";
import { Wordmark } from "@/components/ui/Wordmark/Wordmark";
import type { FooterContent, Link } from "@/types/content";
import { NavLinks } from "../NavLinks/NavLinks";
import styles from "./SiteFooter.module.scss";

type SiteFooterProps = FooterContent & { brand: string; links: Link[] };

export function SiteFooter({ brand, links, copyright, signature }: SiteFooterProps) {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <div className={styles.identity}>
          <Wordmark>{brand}</Wordmark>
          <NavLinks links={links} label="Rodapé" />
        </div>
        <div className={styles.credits}>
          <p>{copyright}</p>
          <p>{signature}</p>
        </div>
      </Container>
    </footer>
  );
}
