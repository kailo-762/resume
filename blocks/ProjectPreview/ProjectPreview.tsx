import React, { ComponentProps, ReactNode } from "react";
import styles from "./ProjectPreview.module.scss";

import { Button } from "../../components/Button/Button";
import { Text } from "../../components/Typography/Text/Text";
import { Tags } from "../../components/Tags/Tags";
import { ScrollItem } from "../../components/ScrollItem/ScrollItem";
import { Title } from "../../components/Typography/Title/Title";

interface ProjectPreviewProps extends ComponentProps<any> {
  icon?: ReactNode;
  isWhite?: boolean;
  live?: string;
  more?: string;
  repo?: string;
  tags?: string[];
  title: string;
  text: string;
}

export const ProjectPreview = ({
  icon,
  isWhite = false,
  live = "",
  more = "",
  repo = "",
  tags = [],
  title,
  text,
}: ProjectPreviewProps) => (
  <div className={styles.ProjectPreview}>
    <ScrollItem>
      <div className={styles.content}>
        <div className={styles.cardContainer}>
          <Title level={3} sx={{ marginBottom: 1 }}>
            {title}
          </Title>

          {icon && icon}
        </div>

        <div className={styles.descriptionContainer}>
          <div className={styles.linksContainer}>
            {more.length > 0 && (
              <Button href={more} customStyle={"white"} isLink>
                More
              </Button>
            )}

            {live.length > 0 && (
              <Button href={live} customStyle={"pink"} isLink>
                Live
              </Button>
            )}

            {repo.length > 0 && (
              <Button href={repo} customStyle={"pink"} isLink>
                Source
              </Button>
            )}
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.textContainer}>
              <Text>{text}</Text>
            </div>

            {tags.length > 0 && (
              <div className={styles.tagsContainer}>
                <Tags tags={tags} />
              </div>
            )}
          </div>
        </div>
      </div>
    </ScrollItem>
  </div>
);
