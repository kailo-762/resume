import React from "react";
import styles from "./Work.module.scss";

import { Title } from "../../components/Typography/Title/Title";
import { WorkPreview } from "../../blocks/WorkPreview/WorkPreview";

export const Work = () => (
  <section className={styles.Work}>
    <Title className="sectionTitle" level={1}>
      Work
    </Title>

    <div className={styles.previewContainer}>
      <WorkPreview
        data={{
          title: "Workwise",
          description: (
            <span>
              Currently I am working as a <b>frontend engineer</b> at Workwise
              helping applicants in finding their dream job.
              <br />
              <b>Tech Stack:</b> Typescript, React, Redux, Jest
            </span>
          ),
          emoji: "🏄🏻‍♂️",
          isWhite: false,
        }}
      />

      <WorkPreview
        className={styles.isHalf}
        data={{
          title: "OBI Next",
          description: (
            <span>
              As <b>Project Management Intern</b> I created new offers for the
              DIY chain in Austria and prepared presentations for various target
              groups: from store employee to executive board.
            </span>
          ),
          emoji: "🚴🏼",
          isWhite: true,
        }}
      />

      <WorkPreview
        className={styles.isHalf}
        data={{
          title: "Cybex",
          description: (
            <span>
              As <b>Sales Student Assistant</b> I managed orders through SAP and
              helped in developing more efficient processes for after-sales.
            </span>
          ),
          emoji: "🏋🏼",
          isWhite: false,
        }}
      />
    </div>
  </section>
);
