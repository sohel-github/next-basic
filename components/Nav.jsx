import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="pb-5">
      <ul className="flex gap-10">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/blogs">Blogs</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
