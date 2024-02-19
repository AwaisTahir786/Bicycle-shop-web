import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { text } from "stream/consumers";

const links = [
  { name: "Home", path: "/" },
  { name: "Our-Bikes", path: "/our-bikes" },
];
function Nav({ containerstyles }: any) {
  const pathname = usePathname();
  return (
    <nav className={`${containerstyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${link.path === pathname && "text-accent"}`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}

export default Nav;
