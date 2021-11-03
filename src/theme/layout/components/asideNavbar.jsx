import React from "react";

export default function AsideNavbar({ children }) {
  return (
    <aside className="col bg-white" id="sticky-sidebar" >
      <div className="">
        <div className="nav flex-column">
          {children}
        </div>
      </div>
    </aside>

  );
}
