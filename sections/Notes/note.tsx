import { ReactNode } from "react";
import { Box } from "@mui/material";
import Router from "next/router";

import { OwnAppBar } from "../../components/AppBar/appbar";
import { Title } from "../../components/Typography/Title/Title";

interface NoteProps {
  children: ReactNode;
  title: string;
}

export const Note = ({ children, title }: NoteProps) => {
  // --- HELPERS ---

  const handleBackButtonClick = () => Router.push("/notes");

  // --- RENDER ---
  return (
    <>
      <OwnAppBar
        handleBackButtonClick={handleBackButtonClick}
        hasBackButton
        link="/notes"
        linkText=""
        position="fixed"
      >
        <Title className="notesTitle" level={4}>
          {title}
        </Title>
      </OwnAppBar>

      <div className="app">
        <Box margin={3}>{children}</Box>
      </div>
    </>
  );
};
