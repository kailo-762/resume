import React, { ComponentProps } from "react";
import styles from "./Image.module.scss";
import classNames from "classnames";

interface ImageProps extends ComponentProps<any> {
  alt?: string;
  src: string;
}

export const Image = ({ alt = "", className, src }: ImageProps) => (
  <img alt={alt} className={classNames(styles.Image, className)} src={src} />
);
