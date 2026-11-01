import React, { ComponentProps } from "react";

import { Card } from "../Card/Card";
import { ShadowBox } from "../../ShadowBox/ShadowBox";

interface ShadowCardProps extends ComponentProps<any> {
  isWhite?: boolean;
}

export const ShadowCard = ({
  children,
  className,
  isWhite = false,
}: ShadowCardProps) => (
  <ShadowBox shadowColor={isWhite ? "light" : "dark"}>
    <Card className={className}>{children && children}</Card>
  </ShadowBox>
);
