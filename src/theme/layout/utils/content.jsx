import React from "react";
import AsideNavbar from "../components/asideNavbar";

export function Content({ children, aside }) {
  return (
    <div className="row">
      <div className="col-4" style={{ paddingLeft : 0 }}  >

        { aside && 
          ( 
            <AsideNavbar>
              {React.createElement(aside)}
            </AsideNavbar>
          )
        }
      </div>
      <div className="col-8"  id="main">
        {children}
      </div>

    </div>
  );
}
