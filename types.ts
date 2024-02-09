export type SideNavItem = {
    title: string;
    path: string;
    icon?: JSX.Element;
    submenu?: boolean;
    subMenuItems?: SideNavItem[];
  };

export type MenuItemWithSubMmenuProps = {
  item: SideNavItem;
  toggleOpen: () => void
}