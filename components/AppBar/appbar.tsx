import { PropsWithChildren } from "react";
import Link from "next/link";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface OwnAppBarProps {
  hasBackButton?: boolean;
  handleBackButtonClick?: () => void;
  link: string;
  linkText: string;
  position?: "fixed" | "static" | "absolute" | "sticky" | "relative";
}

export const OwnAppBar = ({
  children,
  hasBackButton = false,
  handleBackButtonClick,
  link,
  linkText,
  position = "static",
}: PropsWithChildren<OwnAppBarProps>) => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position={position} sx={{ backgroundColor: "#A393EB" }}>
      <Toolbar>
        {hasBackButton && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ArrowBackIcon onClick={handleBackButtonClick} />
          </IconButton>
        )}

        <Link href={link}>
          <a>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              {linkText}
            </Typography>
          </a>
        </Link>

        <Box margin="auto">{children}</Box>
      </Toolbar>
    </AppBar>
  </Box>
);
