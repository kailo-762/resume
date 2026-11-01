import React, { ComponentProps, useCallback } from "react";
import styles from "./SocialCard.module.scss";
import classnames from "classnames";

import { ShadowCard } from "../ShadowCard/ShadowCard";
import { OverlayImage } from "../../OverlayImage/OverlayImage";
// import { ProfilePicture } from "../../ProfilePicture/ProfilePicture";
import { Title } from "../../Typography/Title/Title";
import { Text } from "../../Typography/Text/Text";
import { Button } from "../../Button/Button";
// import { ShadowBox } from "../../ShadowBox/ShadowBox";
import { ScrollItem } from "../../ScrollItem/ScrollItem";

const EMAIL = "kai.rauenbuehler@gmail.com";

type SocialLink = {
  icon?: string;
  name: string;
  link: string;
};

interface SocialCardProps {
  className?: string;
  image: string;
  mail?: string;
  name: string;
  location?: string;
  socials?: SocialLink[];
}

export const SocialCard = ({
  className,
  image,
  mail,
  name,
  location,
  socials,
}: SocialCardProps) => {
  // --- HELPERS ---

  const handleClick = useCallback(() => {
    navigator.clipboard.writeText(EMAIL);
    window.alert(`You copied ${EMAIL} successfully.`);
  }, []);

  // --- RENDER ---

  return (
    <ScrollItem>
      <ShadowCard
        className={classnames(styles.SocialCard, className)}
        isWhite={true}
      >
        {/* <div className={styles.header}>
          <OverlayImage className={styles.headerImage} src={image} />
        </div> */}
        <div className={styles.header}></div>

        <div className={styles.content}>
          <Title className={styles.center} level={4}>
            {name}
          </Title>

          {location && <Text className={styles.center}>{location}</Text>}

          {mail && (
            <div className={styles.mailContainer}>
              <Title className={styles.subtitle} level={4}>
                Mail
              </Title>

              <div className={styles.addressContainer}>
                <Text className={styles.email}>{mail}</Text>

                <Button
                  isLink={false}
                  customStyle="black"
                  clickHandler={handleClick}
                >
                  Copy
                </Button>
              </div>
            </div>
          )}

          {socials?.length && (
            <div className={styles.socialContainer}>
              <Title className={styles.subtitle} level={4}>
                Socials
              </Title>

              <div className={styles.socialButtonContainer}>
                {socials.map((social, index) => (
                  <Button
                    key={index}
                    // icon={social.icon}
                    href={social.link}
                    className={styles.socialButton}
                  >
                    {social.name}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </ShadowCard>
    </ScrollItem>
  );
};
