import React from "react";
// import styles from "./Contact.module.scss";

import { Title } from "../components/Typography/Title/Title";
import { SocialCard } from "../components/Cards/SocialCard/SocialCard";
import { OwnAppBar } from "../components/AppBar/appbar";

const Contact = () => (
  <>
    <OwnAppBar link="/" linkText="Home">
      {/* <SearchBarElement /> */}
    </OwnAppBar>

    <div className="app">
      <SocialCard
        name="Kai Rauenbühler"
        image="./backgrounds/cop2.jpeg"
        location="Karlsruhe, Germany"
        mail="kai.rauenbuehler@gmail.com"
        socials={[
          {
            name: "Github",
            link: "https://github.com/kailogin",
            icon: "/logos/github.svg",
          },
          {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/kai-jonas-rauenbuehler/",
            icon: "/logos/linkedin.svg",
          },
        ]}
      />
      {/* </div> */}
    </div>
  </>

  //   <section>
  //     {/* <section className={styles.Contact} id="contact"> */}
  //     {/* <div className={styles.head}> */}
  //     <Title className="sectionTitle" level={1}>
  //       Contact
  //     </Title>
  //     {/* </div> */}

  //     {/* <div className={styles.contactInfo}> */}
  //     <div>
  //       <SocialCard
  //         name="Kai Rauenbühler"
  //         image="./backgrounds/cop2.jpeg"
  //         location="Karlsruhe, Germany"
  //         mail="kai.rauenbuehler@gmail.com"
  //         socials={[
  //           {
  //             name: "Github",
  //             link: "https://github.com/kailogin",
  //             icon: "/logos/github.svg",
  //           },
  //           {
  //             name: "LinkedIn",
  //             link: "https://www.linkedin.com/in/kai-jonas-rauenbuehler/",
  //             icon: "/logos/linkedin.svg",
  //           },
  //         ]}
  //       />
  //     </div>
  //   </section>
);

export default Contact;
