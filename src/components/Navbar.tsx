"use client";

import WordMark from "@/components/WordMark";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
// import Link from "next/link";
import ButtonLink from "./ButtonLink";
import { Link } from "next-view-transitions";
import TransitionLink from "./TransitionLink";

type NavbarProps = {
  settings: Content.SettingsDocument;
};

const Navbar = ({ settings }: NavbarProps) => {
  return (
    <nav className="md-:py-6 px-4 py-4 md:px-6" aria-label="Main">
      <div className="mx-auto flex max-w-6xl flex-col justify-between py-2 text-white md:flex-row md:items-center">
        <Link href="/">
          <WordMark />
          <span className="sr-only">Pixa.ai Home Page</span>
        </Link>
        <ul className="flex gap-6">
          {settings.data.navigation.map((item) => {
            if (item.cta_button) {
              return (
                <li key={item.label}>
                  <ButtonLink field={item.link}>{item.label}</ButtonLink>
                </li>
              );
            }
            return (
              <li key={item.label} className="inline-flex">
                <Link
                  href={item.link.url}
                  className="inline-flex min-h-11 items-center"
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
