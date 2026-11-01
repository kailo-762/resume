import { useMemo } from "react";
import Typography from "@mui/material/Typography";

interface NewListElementProps {
  hashtags: string[];
  title: string;
}

export const NewListElement = ({ hashtags, title }: NewListElementProps) => {
  const HASH_TAGS = useMemo(
    () =>
      hashtags.map((hash) => (
        <Typography component="span" sx={{ display: "inline" }} variant="body2">
          #{hash}{" "}
        </Typography>
      )),
    [hashtags]
  );

  return (
    <>
      <Typography variant="button" style={{ fontWeight: 600 }}>
        {title}
      </Typography>

      <br />

      {HASH_TAGS}
    </>
  );
};
