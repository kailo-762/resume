import React from "react";
import styles from "./Welcome.module.scss";

import { Button } from "../../components/Button/Button";
import { Title } from "../../components/Typography/Title/Title";
import { URLS } from "../consts";

export const Welcome = () => (
  <div className={styles.Welcome}>
    <Title level={2} className={styles.heading}>
      Hey, I am <br className={styles.isMobileOnly} />
      <span className={styles.isWhite}>Kai Rauenbühler.</span> A Karlsruhe based{" "}
      <span className={styles.isPink}>Web Developer</span>.
    </Title>

    {`\n`}

    <div className={styles.buttonContainer}>
      <Button href={URLS.CONTACT} customStyle="pink" className="button">
        Contact me
      </Button>

      <Button href={URLS.NOTES} customStyle="white" className="button">
        My notes
      </Button>
    </div>
  </div>
);
