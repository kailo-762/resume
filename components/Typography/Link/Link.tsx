import React, { ComponentProps } from "react";
import classnames from "classnames";
import styles from "./Link.module.scss";

// Components
import { Button } from "../../Button/Button";

interface LinkProps extends ComponentProps<any> {
  color?: "pink" | "black" | "white";
}

export const Link = ({
  children,
  color = "pink",
  className,
  href = "",
}: LinkProps) => (
  <Button
    className={classnames(styles.Link, className)}
    customStyle={color}
    isGhost={true}
    isLink={true}
    isShadow={false}
    href={href}
  >
    {children}
  </Button>
);
