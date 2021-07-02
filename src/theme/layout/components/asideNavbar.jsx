import React from "react";

export default function AsideNavbar({ children }) {
  return (
    <aside className="col bg-white" id="sticky-sidebar" >
      <div class="sticky-top">
        <div class="nav flex-column">
          {children}
        </div>
      </div>
    </aside>

  );
}
