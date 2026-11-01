import React, { ComponentProps } from "react";
import styles from "./List.module.scss";
import classNames from "classnames";

import { Text } from "../Text/Text";

interface ListProps extends ComponentProps<any> {
  isHyphens?: boolean;
  items: string[];
}

export const List = ({ isHyphens = true, items, className }: ListProps) => (
  <ul
    className={classNames(
      styles.List,
      { [styles.isHyphens]: isHyphens },
      className
    )}
  >
    {items.map((item, index) => (
      <li key={index}>
        <Text>{item}</Text>
      </li>
    ))}
  </ul>
);
