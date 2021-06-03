import React from "react";
import InsuranceDetails from "./insuranceDetails";
import TopInsurance from "./topInsurance";

function SelectPlanPage() {
  const [selectedData, setSelectedData] = React.useState();

  const data = [
    {
      id: "1",
      insurance_name: "COLMENA",
      title: "Colmena - Plan 1",
      rate: 4.0,
      premium: "$ 25.000",
      return_value: "80%",
      anual_price: "$ 284.400",
      mensual_price: "$ 25.000",
      message: "Prima de $25,000 con valor asegurado de $70,000,000",
      description: "",
    },
    {
      id: "2",
      insurance_name: "COLMENA",
      title: "Colmena - Plan 2",
      rate: 4.0,
      premium: "$ 25.000",
      return_value: "80%",
      anual_price: "$ 455.040",
      mensual_price: "$ 40.000",
      message: "Prima de $40,000 con valor asegurado de $125,000,000",
      description: "",
    },
    {
      id: "3",
      insurance_name: "COLMENA",
      title: "Colmena - Plan 3",
      rate: 4.0,
      premium: "$ 25.000",
      return_value: "80%",
      anual_price: "$ 682.560",
      mensual_price: "$ 60.000",
      message: "Prima de $60,000 con valor asegurado de $200,000,000",
      description: "",
    },
  ];

  const handleSelectData = (values) => {
    console.log(values);
    setSelectedData(values);
  };

  return (
    <div className="container-fluid">
      <div className="row m-0 mb-4">
        <div className="card custom-card w-100">
          <div className="card-body text-center">Contáctanos por WhatsApp</div>
        </div>
      </div>
      {!selectedData ? (
        <TopInsurance onSelect={handleSelectData} insuranceList={data} />
      ) : (
        <InsuranceDetails insurance={selectedData} />
      )}
    </div>
  );
}

export default SelectPlanPage;
