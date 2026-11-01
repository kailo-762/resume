import { useRouter } from "next/router";
import { useMemo } from "react";

import { PROGRAMMING_LIST } from "../../sections/consts";
import { Text } from "../../components/Typography/Text/Text";
import { Note } from "../../sections/Notes/note";

const Post = () => {
  // --- STATE ---

  const router = useRouter();

  const { notesId } = router.query;

  const noteId = Array.isArray(notesId) ? notesId[0] : notesId;

  // --- MEMOIZED ---

  const article = useMemo(
    () =>
      PROGRAMMING_LIST.find(({ id, content }) => {
        if (!noteId) {
          return;
        }

        if (id != noteId) {
          return;
        }

        return content;
      }),
    [noteId]
  );

  // --- RENDER ---

  if (!article) {
    return (
      <div className="app">
        <Text>No article found with this id.</Text>
      </div>
    );
  }

  return <Note title={article.title}>{article.content}</Note>;
};

export default Post;
