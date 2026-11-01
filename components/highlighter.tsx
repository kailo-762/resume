import { CSSProperties } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface HighlighterProps {
  code: string;
  customStyles?: CSSProperties;
  language?: string;
}

export const Highlighter = ({
  code,
  customStyles,
  language = "typescript",
}: HighlighterProps) => {
  // --- RENDER ---

  return (
    <SyntaxHighlighter
      language={language}
      style={materialDark}
      customStyle={{ width: "fit-content", ...customStyles }}
    >
      {code}
    </SyntaxHighlighter>
  );
};
