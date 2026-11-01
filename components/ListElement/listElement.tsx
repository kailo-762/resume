import { useMemo } from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

interface ListElementProps {
  hashtags: string[];
  id: string;
  title: string;
}

export const ListElement = ({ hashtags, id, title }: ListElementProps) => {
  // --- MEMOIZED ---

  const HASH_TAGS = useMemo(
    () =>
      hashtags.map((hash) => (
        <Typography
          sx={{ display: "inline" }}
          component="span"
          variant="body2"
          color="text.primary"
        >
          #{hash}{" "}
        </Typography>
      )),
    [hashtags]
  );

  // --- RENDER ---

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={id} src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>

        <ListItemText
          primary={title}
          secondary={HASH_TAGS}
          sx={{ color: "black", fontWeight: 600 }}
        />
      </ListItem>

      <Divider variant="inset" component="li" />
    </List>
  );
};
