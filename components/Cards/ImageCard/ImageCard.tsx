import React, { ComponentProps } from "react";
import styles from "./ImageCard.module.scss";
import classnames from "classnames";

import { ShadowCard } from "../ShadowCard/ShadowCard";
import { OverlayImage } from "../../OverlayImage/OverlayImage";

interface ImageCardProps extends ComponentProps<any> {
  isGradient?: boolean;
  isWhite?: boolean;
  overlay?: string;
  src?: string;
}

export const ImageCard = ({
  children,
  className,
  isGradient = false,
  isWhite = false,
  overlay,
  src,
}: ImageCardProps) => (
  <ShadowCard
    isWhite={isWhite}
    className={classnames(
      styles.ImageCard,
      { [styles.isWhite]: isWhite },
      { [styles.isGradient]: isGradient },
      className
    )}
  >
    <div className={styles.contentContainer}>{children && children}</div>

    <div className={styles.absoluteContainer}>
      <OverlayImage
        src={src}
        isWhite={isWhite}
        isGradient={isGradient}
        overlay={overlay}
      />
    </div>
  </ShadowCard>
);
