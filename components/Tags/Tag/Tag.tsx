import React from "react";
import styles from "./Tag.module.scss";

import { Text } from "../../Typography/Text/Text";

interface TagProps {
  value: string;
}

export const Tag = ({ value = "" }: TagProps) => (
  <li className={styles.Tag}>
    <Text>{value}</Text>
  </li>
);
