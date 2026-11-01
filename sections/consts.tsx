import { LIST_ELEMENT } from "./commonTypes";
import { Highlighter } from "../components/highlighter";
import { Text } from "../components/Typography/Text/Text";

export enum URLS {
  CONTACT = "/contact",
  NOTES = "/notes",
}

export const PROGRAMMING_LIST: LIST_ELEMENT[] = [
  {
    hashtags: ["sethgodin", "javascript"],
    id: "1",
    title: "Time and focus and energy",
    content: (
      <>
        <Text>
          Sooner or later, they’re all finite. And we allocate our time and
          emotional energy determines what gets done. If we audited your day in
          six-minute increments, what would we find? By the clock, how did you
          actually spend the time you given to you (we each get the same 24
          hours). {"\n"} How much was spent on work? {"\n"}
          <Highlighter code="const num = () => 1" />
          And the work time, how is it correlated with what creates the value
          you seek? {"\n"} A question that’s harder to measure, but with far
          more impact, of the time you allocated, what was your focus and
          emotional drive spent o n? What were the crises and highlights of the
          last day or week? {"\n"}
          There’s generally a gulf between what we say we did all day and what
          we actually did. And there’s an even bigger chasm between the
          urgencies and emotional moments and the ones we know actually pay off.{" "}
          {"\n"} When we give away our day, we give away our future.{" "}
        </Text>
      </>
    ),
  },
  {
    hashtags: ["typescript", "javascript"],
    id: "2",
    title: "PROGRAMMING 2",
    content: "",
  },
  {
    hashtags: ["sethgodin", "javascript"],
    id: "3",
    title: "Time and focus and energy",
    content: "",
  },
];

// "<p class=text>Sooner or later, they’re all finite. </p> <p class=text>And we allocate our time and emotional energy determines what gets done. If we audited your day in six-minute increments, what would we find? By the clock, how did you actually spend the time you given to you (we each get the same 24 hours).  {'\n'} How much was spent on work?  {'\n'} And the work time, how is it correlated with what creates the value you seek?  {'\n'} A question that’s harder to measure, but with far more impact, of the time you allocated, what was your focus and emotional drive spent on? What were the crises and highlights of the last day or week?  {'\n'} There’s generally a gulf between what we say we did all day and what we actually did. And there’s an even bigger chasm between the urgencies and emotional moments and the ones we know actually pay off.  {'\n'} When we give away our day, we give away our future.</p>",
