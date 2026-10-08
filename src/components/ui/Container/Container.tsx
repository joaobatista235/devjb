import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./Container.module.scss";

type ContainerProps = { width?: "content" | "wide"; className?: string; children: ReactNode };

export function Container({ width = "content", className, children }: ContainerProps) {
  return <div className={cx(styles.container, styles[width], className)}>{children}</div>;
}
