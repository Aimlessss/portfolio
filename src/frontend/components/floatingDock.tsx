type DockItem = {
  label: string;
  href: string;
  icon: string;
  external?: boolean;
};

const dockItems: DockItem[] = [
  {
    label: "Home",
    href: "#top",
    icon: "⌂",
  },
  {
    label: "Blog",
    href: "#blog",
    icon: "▤",
  },
  {
    label: "GitHub",
    href: "https://github.com/Aimlessss",
    icon: "GH",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/atharva-kulkarni-9a992322b/",
    icon: "in",
    external: true,
  },
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