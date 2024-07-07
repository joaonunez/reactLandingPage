import React from "react";
import navItems from "../../scripts/nav/navitems";

export function NavItem() {
  return (
    <>
      {navItems.map((item) => (
        <li className="nav-item navitem" key={item.id+item.title}>
          <a
            className="nav-link active a-item"
            aria-current="page"
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.title}
          </a>
        </li>
      ))}
    </>
  );
}
