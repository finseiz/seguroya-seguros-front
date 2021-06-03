import React from "react";
import AsideNavbar from "../components/asideNavbar";

export function Content({ children, aside }) {
  return (
    <div className="d-flex flex-row">
      {aside && <AsideNavbar>{React.createElement(aside)}</AsideNavbar>}
      <div className={`content ${aside ? "with-aside" : ""}`}>{children}</div>
    </div>
  );
}
