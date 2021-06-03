import React from "react";
import BrandPage from "app/components/home/brandPage";
import SharedSections from "app/components/home/sharedSections";

function Home() {
  return (
    <div className="container-fluid p-0">
      <BrandPage />
      <SharedSections />
    </div>
  );
}

export default Home;
