import Paper from "@mui/material/Paper";
import Link from "next/link";

import { ProfilePicture } from "../../components/ProfilePicture/ProfilePicture";
import { Title } from "../../components/Typography/Title/Title";
import { Text } from "../../components/Typography/Text/Text";
import { URLS } from "../consts";
import { Highlighter } from "../../components/highlighter";

export const About = () => (
  <section>
    <ProfilePicture className="aboutProfilepic" />

    <Paper variant="outlined" sx={{ mb: 10, p: 8 }}>
      <Title className="aboutTitle" level={2}>
        🔆 Short Introduction 🔆
      </Title>

      {/* <Highlighter content="sdfsdfsdf" language="javascript" /> */}

      <Text className="aboutText">
        I love to develop webapps and mobile apps. After my bachelors in
        business I learned coding and started to work as a frontend engineer.
        Next to a masters degree in Data Science I followed this passion for web
        development and am always eager to learn new technologies. Next to
        coding I am very interested in investing and sports. Feel free to read
        into my notes upon stuff I found interesting on{" "}
        <Link href={URLS.NOTES}>notes</Link>.
      </Text>
    </Paper>
  </section>
);
