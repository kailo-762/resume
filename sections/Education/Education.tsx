import React from "react";
import styles from "./Education.module.scss";

import { Title } from "../../components/Typography/Title/Title";
import { WorkPreview } from "../../blocks/WorkPreview/WorkPreview";

export const Education = () => (
  <section className={styles.Education}>
    <Title className="sectionTitle" level={1}>
      Education
    </Title>

    <div className={styles.previewContainer}>
      <WorkPreview
        className={styles.isHalf}
        data={{
          title: "Data Science and BA",
          description: (
            <span>
              <b>Copenhagen Business School - </b> Following my interest in data
              analytics, machine learning and artifical intelligence I undertook
              a master's degree. The degree included an exchange at Politecnico
              di Milano.
              <br />
              GPA: A-
            </span>
          ),
          emoji: "🏊🏼",
          isWhite: true,
        }}
      />

      <WorkPreview
        className={styles.isHalf}
        data={{
          title: "Business Administration",
          description: (
            <span>
              <b>University of Bayreuth - </b> Receiving a general understanding
              of businesses and specializing in Business Informatics and
              Finance. The degree included an exchange at Université de
              Bordeaux.
              <br />
              GPA: B+
            </span>
          ),
          emoji: "🧗🏼",
          isWhite: false,
        }}
      />
    </div>
  </section>
);
