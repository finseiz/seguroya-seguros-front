import React from "react";
import CustomNavbar from "../components/customNavbar.jsx";
import Footer from "../components/footer.jsx";

export function Layout({ children }) {
  return (
    /* wrapper */
    <div className="d-flex flex-column">
      {/* header-wrapper */}
      <CustomNavbar />
      {/* content-wrapper */}
      <div className="page">{children}</div>
      {/* footer-wrapper */}
      <Footer />
    </div>
  );
}
