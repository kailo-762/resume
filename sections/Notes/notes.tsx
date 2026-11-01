import Link from "next/link";

import { PROGRAMMING_LIST } from "../consts";
import { NewListElement } from "../../components/ListElement/newListElement";

export const Notes = () => (
  <ol>
    {PROGRAMMING_LIST.map(({ hashtags, id, title }) => (
      <li className="notes">
        <Link href={`notes/${id}`}>
          <a>
            <NewListElement hashtags={hashtags} title={title} />
          </a>
        </Link>
      </li>
    ))}
  </ol>
);
