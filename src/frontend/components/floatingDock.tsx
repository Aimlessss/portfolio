import { ReactNode } from "react";
import githubLogo from "../images/github.png";
import leetcodeLogo from "../images/leetcode-logo.png";
type DockItem = {
  label: string;
  href: string;
  icon: string | ReactNode;
  external?: boolean;
};

const dockItems: DockItem[] = [
  {
    label: "Home",
    href: "#top",
    icon: "⌂",
  },
  // {
  //   label: "Blog (Coming Soon)",
  //   href: "#blog",
  //   icon: "▤",
  // },
  {
    label: "GitHub",
    href: "https://github.com/Aimlessss",
    icon: <img src={githubLogo} alt="" aria-hidden="true" />,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/atharva-kulkarni-9a992322b/",
    icon: "in",
    external: true,
  },
  {
    label : "LeetCode",
    href : 'https://leetcode.com/u/A1mless/',
    icon: <img src={leetcodeLogo} alt="" aria-hidden="true" />,
    external : true
  }
];


function FloatingDock() {
  return (
    <nav className="floating-dock" aria-label="Quick links">
      {dockItems.map((item) => (
        <a
          key={item.label}
          className="dock-item"
          href={item.href}
          aria-label={item.label}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noreferrer" : undefined}
        >
          <span className="dock-icon">{item.icon}</span>
          <span className="dock-label">{item.label}</span>
        </a>
      ))}
    </nav>
  );
}

export default FloatingDock;