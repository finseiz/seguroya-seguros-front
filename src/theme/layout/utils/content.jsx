import React from "react";
import AsideNavbar from "../components/asideNavbar";

export function Content({ children, aside }) {
  return (
    <div className="row">

      { aside && 
        ( 
          <AsideNavbar>
            {React.createElement(aside)}
          </AsideNavbar>
        )
      }

      <div className="col-9" id="main">
        {children}
      </div>

    </div>
  );
}
