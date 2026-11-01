import React from "react";
import styles from "./Footer.module.scss";

import { Title } from "../../components/Typography/Title/Title";

export const Footer = () => (
  <footer className={styles.Footer}>
    <div className={styles.contentContainer}>
      <Title level={4}>© Kai Rauenbühler, 2022</Title>
    </div>
  </footer>
);
