import React, { ComponentProps } from "react";
import styles from "./Card.module.scss";
import classnames from "classnames";

interface CardProps extends ComponentProps<any> {
  isDynamicHeight?: boolean;
}

export const Card = ({
  className,
  isDynamicHeight = false,
  children,
  style,
}: CardProps) => (
  <div
    className={classnames(
      styles.Card,
      { [styles.isDynamicHeight]: isDynamicHeight },
      className
    )}
    customStyle={style}
  >
    {children && children}
  </div>
);
