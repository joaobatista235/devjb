import type { AnchorHTMLAttributes } from "react";
import { cx } from "@/lib/cx";
import { Icon } from "../Icon/Icon";
import styles from "./Button.module.scss";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "outline";
  size?: "sm" | "md";
  withArrow?: boolean;
};

export function Button({
  variant = "primary", size = "md", withArrow = false, className, children, ...props
}: ButtonProps) {
  return (
    <a className={cx(styles.button, styles[variant], styles[size], className)} {...props}>
      {children}
      {withArrow && <Icon name="arrow-up-right" size={17} />}
    </a>
  );
}
