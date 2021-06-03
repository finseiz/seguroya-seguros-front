import React from "react";

export default function AsideNavbar({ children }) {
  return (
    /* aside */
    <aside id="kt_aside" className="sidebar d-flex flex-column flex-row-auto">
      <div
        id="kt_aside_menu"
        className="my-4 scroll ps ps--active-y"
        data-menu-vertical="1"
        data-menu-scroll="1"
        data-menu-dropdown-timeout="500"
      >
        {children}
      </div>
    </aside>
  );
}
