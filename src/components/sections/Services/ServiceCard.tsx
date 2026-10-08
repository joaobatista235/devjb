import { Icon } from "@/components/ui/Icon/Icon";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { cx } from "@/lib/cx";
import type { ServiceItem } from "@/types/content";
import { ResponsivePreview } from "./ResponsivePreview";
import styles from "./ServiceCard.module.scss";

type ServiceCardProps = ServiceItem & { order: number; size: "tall" | "short" };

export function ServiceCard({ icon, title, description, preview, order, size }: ServiceCardProps) {
  return (
    <Reveal
      as="li"
      order={order}
      className={cx(styles.card, styles[size], preview && styles.featured)}
    >
      <span className={styles.icon}><Icon name={icon} size={26} /></span>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      {preview === "responsive" && <ResponsivePreview />}
    </Reveal>
  );
}
