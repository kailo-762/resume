import React, { ComponentProps } from "react";
import classNames from "classnames";
import styles from "./ShadowBox.module.scss";

import { Card } from "../Cards/Card/Card";

interface ShadowBoxProps extends ComponentProps<any> {
  shadowColor?: string;
}

export const ShadowBox = ({
  children,
  className,
  shadowColor = "dark",
}: ShadowBoxProps) => {
  // --- HELPERS ---

  if (shadowColor === "dark") {
    shadowColor = styles.shadowColorDark;
  }

  if (shadowColor === "light") {
    shadowColor = styles.shadowColorLight;
  }

  const style = {
    background: shadowColor,
  };

  // --- RENDER ---

  return (
    <div className={styles.ShadowBox}>
      {children && children}
      <Card className={classNames(styles.shadow, className)} style={style} />
    </div>
  );
};
