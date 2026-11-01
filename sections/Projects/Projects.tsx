import React from "react";
import styles from "./Projects.module.scss";
import WindPowerIcon from "@mui/icons-material/WindPower";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

import { ProjectPreview } from "../../blocks/ProjectPreview/ProjectPreview";
import { Title } from "../../components/Typography/Title/Title";

export const Projects = () => (
  <section className={styles.Projects}>
    <div className={"sectionTitle"}>
      <Title level={1}>Projects</Title>
    </div>

    <div>
      <ProjectPreview
        icon={<WindPowerIcon sx={{ fontSize: 150 }} />}
        title="Wind Energy Forecasting"
        text="This project was my final master thesis in a group of three. It aimed at developing various models to predict the energy production output of wind farms."
        tags={["Python", "LSTM", "ARCH", "ARMAX", "ANN", "ES-RNN"]}
      />

      <ProjectPreview
        icon={<FitnessCenterIcon sx={{ fontSize: 150 }} />}
        title="Workout Planner"
        text="The Workout Planner was the final project in the course Design and implementation of mobile applications at Politecnico. The course's objective was to design and create a fully functioning app for iOS and android."
        tags={[
          "React Native",
          "Next.js",
          "Typescript",
          "Redux",
          "Jest",
          "Figma",
        ]}
      />

      <ProjectPreview
        icon={<MusicNoteIcon sx={{ fontSize: 150 }} />}
        title="Spotify Song Popularity Prediction"
        text="This group project was aimed at predicting a song's popularity and finding out what makes a song popular through different machine learning models."
        tags={["Python", "SVM", "Logistic Regression", "Random Forest", "PCA"]}
      />

      <ProjectPreview
        icon={<RecordVoiceOverIcon sx={{ fontSize: 150 }} />}
        title="NLP for Lie Detection"
        text="In a group of four people we developed several models aiming at detecting lies within conversations during an online game."
        tags={["Python", "LSTM", "Naive Bayes"]}
      />

      <ProjectPreview
        icon={<AttachMoneyIcon sx={{ fontSize: 150 }} />}
        title="Forecasting Germany’s GDP"
        text="This project explored the possibilities of Arima and ETS models to predict Germany's GDP."
        tags={["ARIMA", "ETS", "R"]}
      />
    </div>
  </section>
);
