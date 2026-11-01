import React, { ComponentProps } from "react";
import classNames from "classnames";
import styles from "./OverlayImage.module.scss";

interface OverlayImageProps extends ComponentProps<any> {
  isGradient?: boolean;
  isWhite?: boolean;
  overlay?: string;
  src?: string;
}

export const OverlayImage = ({
  className,
  isGradient = false,
  isWhite = false,
  overlay,
  src,
}: OverlayImageProps) => {
  // --- HELPERS ---

  const imageStyle = {
    background: `url(${src}) center`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const overlayStyle = {
    background: overlay,
  };

  // --- RENDER ---

  return (
    <div
      className={classNames(
        styles.OverlayImage,
        { [styles.isWhite]: isWhite },
        { [styles.isGradient]: isGradient },
        className
      )}
    >
      <div className={styles.overlay} customStyle={overlayStyle} />
      <div className={styles.image} customStyle={imageStyle} />
    </div>
  );
};
