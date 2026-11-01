import React, { ComponentProps } from "react";
import styles from "./Text.module.scss";
import classNames from "classnames";

export const Text = ({ children, className }: ComponentProps<any>) => (
  <p className={classNames(styles.Text, className)}>{children && children}</p>
);
