import Link from "next/link";

const AboutNav = () => {
  return (
    <nav className="pb-5">
      <ul className="flex gap-10">
        <li>
          <Link href="/mission">Mission</Link>
        </li>
        <li>
          <Link href="/vision">Vision</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AboutNav;
