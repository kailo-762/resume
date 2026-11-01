import React from "react";
import styles from "./Tags.module.scss";

import { Tag } from "./Tag/Tag";

interface TagsProps {
  tags: string[];
}

export const Tags = ({ tags = [] }: TagsProps) => (
  <ul className={styles.Tags}>
    {tags.map((item, index) => (
      <Tag key={index} value={item} />
    ))}
  </ul>
);
