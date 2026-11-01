import React, { MouseEvent, PropsWithChildren } from "react";
import customStyles from "./Button.module.scss";
import classNames from "classnames";

import { Arrow } from "../Icons/Arrow/Arrow";
import { Text } from "../Typography/Text/Text";
import { Title } from "../Typography/Title/Title";

interface ButtonProps extends PropsWithChildren {
  className?: string;
  clickHandler?: () => void;
  href?: string;
  isGhost?: boolean;
  isLink?: boolean;
  isShadow?: boolean;
  customStyle?: "black" | "white" | "pink";
}

export const Button = ({
  clickHandler,
  className,
  children,
  href,
  isGhost = false,
  isLink = true,
  isShadow = true,
  customStyle = "pink",
}: ButtonProps) => {
  // --- HELPERS ---

  let theme = "";
  const isSyntheticLink = typeof clickHandler !== "undefined";

  const handleClick = (event: MouseEvent) => {
    if (typeof clickHandler === "undefined") {
      return;
    }

    event.preventDefault();
    clickHandler();
  };

  if (customStyle === "black") {
    theme = customStyles.black;
  }

  if (customStyle === "white") {
    theme = customStyles.white;
  }

  // --- RENDER ---

  return (
    <a
      className={classNames(
        customStyles.Button,
        theme,
        { [customStyles.isGhost]: isGhost },
        { [customStyles.isLink]: isLink },
        className,
        {
          ["shadow"]: isShadow,
        }
      )}
      href={href ?? undefined}
      onClick={isSyntheticLink ? handleClick : undefined}
    >
      {children && isGhost ? (
        <Title level={4}>{children}</Title>
      ) : (
        <Text>{children}</Text>
      )}

      {isLink && (
        <div className={customStyles.arrowContainer}>
          <Arrow stroke={""} />
        </div>
      )}
    </a>
  );
};
