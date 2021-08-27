import SharedSections from "app/components/home/sharedSections";
import CarsForm from "app/modules/carsInsurance/components/InitialForm/carsForm";
import React from "react";

export default function CarsPage() {
  return (
    <div className="container-fluid p-0">
      <div className="row m-0 background-cars">
        <div className=" content">
          <CarsForm />
        </div>
      </div>
      <SharedSections />
    </div>
  );
}
