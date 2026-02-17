export type NavSection =
  | {
      type: "section";
      label: string;
    }
  | NavLink
  | NavGroup;

export type NavLink = {
  type: "link";
  label: string;
  href: string;
  icon?: string;
  exact?: boolean;
};

export type NavGroup = {
  type: "group";
  label: string;
  icon?: string;
  children: NavLink[];
};

const NAVIGATION: NavSection[] = [
  {
    type: "section",
    label: "Menu",
  },
  {
    type: "link",
    label: "Dashboard",
    href: "/dashboard",
    icon: "ti ti-aperture",
    exact: true,
  },
  {
    type: "group",
    label: "Master Data",
    icon: "ti ti-layout-grid",
    children: [
      {
        type: "link",
        label: "Kategori",
        href: "/kategori",
        icon: "ti ti-circle",
      },
    ],
  },
  {
    type: "link",
    label: "Artikel",
    href: "/artikel",
    icon: "ti ti-file",
  },
  {
    type: "link",
    label: "Projek",
    href: "/projek",
    icon: "ti ti-chart-donut-3",
  },
  {
    type: "link",
    label: "Maintenance",
    href: "/maintenance",
    icon: "ti ti-settings",
  },
];

export type BuiltNavSection =
  | {
      type: "section";
      label: string;
    }
  | (NavLink & { active: boolean })
  | {
      type: "group";
      label: string;
      icon?: string;
      children: (NavLink & { active: boolean })[];
      expanded: boolean;
    };

export const buildNavigation = (pathname: string): BuiltNavSection[] => {
  const normPath = pathname.endsWith("/")
    ? pathname.slice(0, -1) || "/"
    : pathname;

  const isActive = (link: NavLink) => {
    if (link.exact) {
      return normPath === link.href;
    }
    return normPath === link.href || normPath.startsWith(`${link.href}/`);
  };

  return NAVIGATION.map((entry) => {
    if (entry.type === "section") {
      return entry;
    }
    if (entry.type === "link") {
      return {
        ...entry,
        active: isActive(entry),
      };
    }
    const children = entry.children.map((child) => ({
      ...child,
      active: isActive(child),
    }));
    const expanded = children.some((child) => child.active);
    return {
      ...entry,
      children,
      expanded,
    };
  });
};
