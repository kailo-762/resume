import React, { ReactNode, ComponentProps } from "react";
import styles from "./WorkPreview.module.scss";
import classNames from "classnames";

import { ImageCard } from "../../components/Cards/ImageCard/ImageCard";
import { Title } from "../../components/Typography/Title/Title";
import { Text } from "../../components/Typography/Text/Text";
import { ScrollItem } from "../../components/ScrollItem/ScrollItem";

type PreviewData = {
  description: ReactNode;
  emoji: string;
  isWhite?: boolean;
  src?: string;
  title: string | ReactNode;
};

interface WorkPreviewProps extends ComponentProps<any> {
  data: PreviewData;
}

export const WorkPreview = ({ data, className }: WorkPreviewProps) => {
  // --- HELPERS ---

  const { title, src, description, emoji, isWhite = false } = data;

  // --- RENDER ---

  return (
    <div className={classNames(styles.WorkPreview, className)}>
      <ScrollItem>
        <ImageCard src={src ?? ""} isWhite={isWhite}>
          <div className={styles.previewContainer}>
            {title && (
              <Title className={styles.title} level={4}>
                {title}
              </Title>
            )}

            {description && (
              <Text className={styles.description}>{description}</Text>
            )}

            {emoji && (
              <Title className={styles.emoji} level={2}>
                {emoji}
              </Title>
            )}
          </div>
        </ImageCard>
      </ScrollItem>
    </div>
  );
};
