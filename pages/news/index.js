import { Fragment } from "react";
import Link from "next/link";

// domain.com/news

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is">NextJS Is a Great Framework</Link>
        </li>
        <li>something else</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
